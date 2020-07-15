import React from 'react';
import { AddPlaceContext } from './context';
import SubmitResponseSnackbar from './SubmitResponseSnackbar'; 
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
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
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
})

class AddPlace extends React.Component {
    state = {
        loading: false, 
        googlePlacePrediction: null,
        status: '',
        openingDate: new Date(new Date().setHours(0, 0, 0, 0)),     //  Get today's midnight time as the default value
        isAffiliated: false,
        affiliateName: '',
        affiliateEmail: '',
        notes: '',
        snackbarMessage: '',
        snackbarOpen: false
    }

    handleSubmit = (e) => {
        e.preventDefault(); 

        console.log("Sbumit")
        const { googlePlacePrediction, status, openingDate, isAffiliated, affiliateName, affiliateEmail, notes } = this.state; 
        const _this = this; 

        // this.setState({
        //     loading: true
        // }, () => {  
        //     api.placesApi.places().add({
        //         [CONSTANTS.MAIN_TEXT]: googlePlacePrediction.structured_formatting.main_text,
        //         [CONSTANTS.SECONDARY_TEXT]: googlePlacePrediction.structured_formatting.secondary_text,
        //         [CONSTANTS.GOOGLE_PLACE_ID]: googlePlacePrediction.place_id,
        //         [CONSTANTS.STATUS]: status,
        //         [CONSTANTS.OPENING_DATE]: openingDate,
        //         [CONSTANTS.IS_AFFILIATED]: isAffiliated,
        //         [CONSTANTS.AFFILIATE]: {
        //             [CONSTANTS.NAME]: affiliateName,
        //             [CONSTANTS.EMAIL]: affiliateEmail
        //         },
        //         [CONSTANTS.NOTES]: notes
        //     })
        //     .then(function(docRef) {
        //         _this.setState({ 
        //             loading: false,
        //             snackbarMessage: "Place successfully added",
        //             snackbarOpen: true
        //         })
        //     })
        //     .catch(function(error) {
        //         console.log("Error adding place: ", error); 
        //         _this.setState({
        //             loading: false,
        //             snackbarMessage: "Error adding place",
        //             snackbarOpen: true
        //         })
        //     })
        // })
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
                        updateGooglePlacePrediction: (prediction) => this.setState({ googlePlacePrediction: prediction }),
                        updateStatus: (status) => this.setState({ status }),
                        updateOpeningDate: (date) => this.setState({ openingDate: date }),
                        updateAffiliateName: (name) => this.setState({ affiliateName: name }),
                        updateAffiliateEmail: (email) => this.setState({ affiliateEmail: email }),
                        updateNotes: (notes) => this.setState({ notes })
                    }}
                >
                    <Container maxWidth="sm">
                        <form className={classes.form} autoComplete="off" onSubmit={this.handleSubmit}>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <PlaceAutocomplete/>
                                </Grid>
                                <Grid item xs={12}>
                                    <StatusSelect/>
                                </Grid>
                                <Grid item xs={12}>
                                    <OpeningDatePicker/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Affiliate/>
                                </Grid>
                                <Grid item xs={12}>
                                    <NotesTextField/>
                                </Grid>
                            </Grid>
                            <div className={classes.buttonContainer}>
                                <Button className={classes.submit} variant="contained" color="secondary" type="submit" disabled={loading}>
                                    Submit
                                </Button>
                            </div>
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