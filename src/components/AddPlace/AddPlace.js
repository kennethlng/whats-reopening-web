import React, { useState, useContext } from 'react';
import { AddPlaceContext } from './context';
import SubmitResponseSnackbar from './SubmitResponseSnackbar'; 
import { makeStyles } from '@material-ui/core/styles';
import StepperProgress from './StepperProgress';
import StepperBody from './StepperBody'; 
import Container from '@material-ui/core/Container'; 
import Backdrop from '@material-ui/core/Backdrop'; 
import CircularProgress from '@material-ui/core/CircularProgress';
import FirebaseContext from '../Firebase/context'; 
import Paper from '@material-ui/core/Paper'; 
import ThankYou from './ThankYou'; 
import { getSteps } from './steps'; 
import Typography from '@material-ui/core/Typography'; 
import * as STATUS from '../../constants/status'; 
import * as CONSTANTS from '../../constants/places'; 

const useStyles = makeStyles(theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
})) 

const steps = getSteps(); 

export default function AddPlace() {
    const classes = useStyles(); 
    const firebase = useContext(FirebaseContext); 

    const [loading, setLoading] = useState(false); 
    const [googlePlacePrediction, setGooglePlacePrediction] = useState(null); 
    const [status, setStatus] = useState(STATUS.TEMPORARILY_CLOSED); 
    const [step, setStep] = useState(0); 
    const [openingDate, setOpeningDate] = useState(new Date(new Date().setHours(0, 0, 0, 0)));
    const [isAffiliated, setIsAffiliated] = useState(false); 
    const [contactName, setContactName] = useState(''); 
    const [contactEmail, setContactEmail] = useState(''); 
    const [notes, setNotes] = useState(''); 
    const [snackbarMessage, setSnackbarMessage] = useState(''); 
    const [snackbarOpen, setSnackbarOpen] = useState(false); 

    const handleSubmit = () => {
        setLoading(true); 

        firebase.places().add({
            [CONSTANTS.MAIN_TEXT]: googlePlacePrediction.structured_formatting.main_text,
            [CONSTANTS.SECONDARY_TEXT]: googlePlacePrediction.structured_formatting.secondary_text,
            [CONSTANTS.GOOGLE_PLACE_ID]: googlePlacePrediction.place_id,
            [CONSTANTS.STATUS]: status,
            [CONSTANTS.OPENING_DATE]: openingDate,
            [CONSTANTS.IS_AFFILIATED]: isAffiliated,
            [CONSTANTS.CONTACT]: {
                [CONSTANTS.NAME]: contactName,
                [CONSTANTS.EMAIL]: contactEmail
            },
            [CONSTANTS.NOTES]: notes
        })
        .then(function(docRef) {
            setLoading(false); 
            setSnackbarMessage("Place successfully added");
            setSnackbarOpen(true); 
        })
        .catch(function(error) {
            console.log("Error adding place: ", error); 
            setLoading(false); 
            setSnackbarMessage("Error adding place");
            setSnackbarOpen(true); 
        })
    }

    const handleSnackbarClose = () => setSnackbarOpen(false); 

    return (
        <AddPlaceContext.Provider 
            value={{
                loading,
                step, 
                googlePlacePrediction,
                status, 
                openingDate,
                isAffiliated, 
                contactName, 
                contactEmail, 
                notes,
                updateStep: (step) => setStep(step),
                updateGooglePlacePrediction: (prediction) => setGooglePlacePrediction(prediction),
                updateStatus: (status) => setStatus(status),
                updateOpeningDate: (date) => setOpeningDate(date),
                updateIsAffiliated: (isAffiliated) => setIsAffiliated(isAffiliated),
                updateContactName: (name) => setContactName(name),
                updateContactEmail: (email) => setContactEmail(email),
                updateNotes: (notes) => setNotes(notes),
                submit: handleSubmit
            }}
        >
            <Container maxWidth="sm">
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Add a place
                    </Typography>
                    <React.Fragment>
                        {step === steps.length ? (
                            <ThankYou/>
                        ) : 
                            <React.Fragment>
                                <StepperProgress/>
                                <StepperBody/>
                            </React.Fragment>
                        }
                    </React.Fragment>
                </Paper>
            </Container>
            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color="inherit"/>
            </Backdrop>
            <SubmitResponseSnackbar
                message={snackbarMessage}
                open={snackbarOpen}
                onClose={handleSnackbarClose}  
            />
        </AddPlaceContext.Provider>
    )
}