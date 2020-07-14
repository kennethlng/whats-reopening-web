import React from 'react';
import { AddPlaceContext } from './context';
import SubmitResponseSnackbar from './SubmitResponseSnackbar'; 
import { withStyles } from '@material-ui/core/styles';
import * as api from '../../api'; 
import * as CONSTANTS from '../../constants/database'; 
import PlaceAutocomplete from './PlaceAutocomplete'; 
import StatusSelect from './StatusSelect';
import OpeningDatePicker from './OpeningDatePicker'; 
import Affiliate from './Affiliate'; 
import NotesTextField from './NotesTextField';
import Container from '@material-ui/core/Container'; 
import Button from '@material-ui/core/Button'; 
import Backdrop from '@material-ui/core/Backdrop'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({
    root: {

    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    }
})

class AddPlace extends React.Component {
    state = {
        loading: false, 
        googlePlacePrediction: null,
        status: '',
        openingDate: '',
        isAffiliated: false,
        affiliateName: '',
        affiliateEmail: '',
        notes: '',
        snackbarMessage: '',
        snackbarOpen: false
    }

    handleSubmit = (e) => {
        e.preventDefault(); 

        const { googlePlacePrediction, status, openingDate, isAffiliated, affiliateName, affiliateEmail, notes } = this.state; 
        const _this = this; 

        this.setState({
            loading: true
        }, () => {  
            api.placesApi.places().add({
                mainText: googlePlacePrediction.structured_formatting.main_text,
                secondaryText: googlePlacePrediction.structured_formatting.secondary_text,
                googlePlaceId: googlePlacePrediction.place_id,
                [CONSTANTS.STATUS]: status,
                [CONSTANTS.OPENING_DATE]: openingDate,
                [CONSTANTS.IS_AFFILIATED]: isAffiliated,
                [CONSTANTS.AFFILIATE]: {
                    [CONSTANTS.NAME]: affiliateName,
                    [CONSTANTS.EMAIL]: affiliateEmail
                },
                [CONSTANTS.NOTES]: notes
            })
            .then(function(docRef) {
                _this.setState({ 
                    loading: false,
                    snackbarMessage: "Place successfully added",
                    snackbarOpen: true
                })
            })
            .catch(function(error) {
                console.log("Error adding place: ", error); 
                _this.setState({
                    loading: false,
                    snackbarMessage: "Error adding place",
                    snackbarOpen: true
                })
            })
        })
    }

    handleSnackbarClose = () => {
        this.setState({ snackbarOpen: false })
    }

    render() {
        const { classes } = this.props; 
        const { loading, googlePlacePrediction, status, openingDate, isAffiliated, affiliateName, affiliateEmail, snackbarMessage, snackbarOpen } = this.state; 

        return (
            <React.Fragment>
                <CssBaseline/>
                <AddPlaceContext.Provider 
                    value={{
                        loading, 
                        googlePlacePrediction,
                        status, 
                        openingDate, 
                        isAffiliated, 
                        affiliateName, 
                        affiliateEmail, 
                        updateGooglePlace: (prediction) => this.setState({ googlePlacePrediction: prediction }),
                        updateStatus: (status) => this.setState({ status }),
                        updateOpeningDate: (date) => this.setState({ openingDate: date }),
                        updateAffiliateName: (name) => this.setState({ affiliateName: name }),
                        updateAffiliateEmail: (email) => this.setState({ affiliateEmail: email }),
                        updateNotes: (notes) => this.setState({ notes })
                    }}
                >
                    <Container maxWidth="sm">
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <PlaceAutocomplete/>
                            <StatusSelect/>
                            <OpeningDatePicker/>
                            <Affiliate/>
                            <NotesTextField/>
                            <Button variant="contained" color="secondary" type="submit" disabled={loading}>
                                Submit
                            </Button>
                        </form>
                    </Container>
                    <Backdrop className={classes.backdrop} open={loading}>
                        <CircularProgress color="inherit"/>
                    </Backdrop>
                    <SubmitResponseSnackbar
                        message={snackbarMessage}
                        open={snackbarOpen}
                        onClose={this.handleSnackbarClose}  
                    />
                </AddPlaceContext.Provider>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(AddPlace);