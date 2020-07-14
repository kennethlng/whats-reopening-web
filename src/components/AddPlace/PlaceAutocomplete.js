import React from 'react';
import { AddPlaceContext, withAddPlace } from './context';
import TextField from '@material-ui/core/TextField'; 
import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn'; 
import Typography from '@material-ui/core/Typography'; 
import Grid from '@material-ui/core/Grid';
import parse from 'autosuggest-highlight/parse';
import * as api from '../../api'; 

const styles = (theme) => ({
    icon: {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(2),
    },
})

class PlaceAutocomplete extends React.Component {
    state = {
        inputValue: '',
        timeout: 0,
        options: []
    }

    handleChange = (e, value) => {
        const { options } = this.state; 

        this.props.addPlaceContextValue.updateGooglePlacePrediction(value); 

        this.setState({
            options: value ? [value, ...options] : options
        })
    }

    handleInputValueChange = (e, inputValue) => {
        const _this = this; 
        const { timeout } = this.state; 

        if (timeout) {
            clearTimeout(timeout); 
        }

        this.setState({
            timeout: setTimeout(function() { 
                _this.fetch(inputValue)
            }, 750)
        })
    }

    fetch(inputValue) {
        const { googlePlacePrediction } = this.props.addPlaceContextValue; 
        const _this = this; 

        if (inputValue === '') {
            this.setState({
                options: googlePlacePrediction ? [googlePlacePrediction] : []
            })
            return 
        }

        api.googleMapsApi.placeAutocomplete(inputValue)
        .then(function(response) {
            let newOptions = []

            if (googlePlacePrediction) {
                newOptions = [googlePlacePrediction]
            }

            if (response.data) {
                newOptions = [...newOptions, ...response.data]
            }

            _this.setState({
                options: newOptions
            })
        }) 
        .catch(function(error) {
            console.log(error); 
        })
    }

    render() {
        const { googlePlacePrediction, options } = this.state; 
        const { classes } = this.props; 

        return (
            <AddPlaceContext.Consumer>
                { (context) => (
                    <Autocomplete
                        options={options}
                        getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
                        filterOptions={(x) => x}
                        autoComplete
                        includeInputInList
                        filterSelectedOptions
                        onInputChange={this.handleInputValueChange}
                        onChange={this.handleChange}
                        value={googlePlacePrediction}
                        renderInput={(params) => <TextField {...params} fullWidth label="Place name" required disabled={context.loading}/>}
                        renderOption={(option) => {
                            const matches = option.structured_formatting.main_text_matched_substrings;
                            const parts = parse(
                                option.structured_formatting.main_text,
                                matches.map((match) => [match.offset, match.offset + match.length]),
                            );

                            return (
                                <Grid container alignItems="center">
                                    <Grid item>
                                        <LocationOnIcon className={classes.icon} />
                                    </Grid>
                                    <Grid item xs>
                                        {parts.map((part, index) => (
                                            <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                                                {part.text}
                                            </span>
                                        ))}

                                        <Typography variant="body2" color="textSecondary">
                                            {option.structured_formatting.secondary_text}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            )
                        }}
                    />
                )}
            </AddPlaceContext.Consumer>
        )
    }
}

export default withAddPlace(withStyles(styles)(PlaceAutocomplete)); 