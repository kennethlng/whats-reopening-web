import React, { useContext } from 'react';
import { AddPlaceContext } from './context';
import StatusSelect from './StatusSelect';
import OpeningDatePicker from './OpeningDatePicker'; 
import IsAffiliatedCheckbox from './IsAffiliatedCheckbox'; 
import NotesTextField from './NotesTextField'; 
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles((theme) => ({
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3)
    },
    spacer: {
        flexGrow: 1
    }
}));

export default function PlaceForm() {
    const classes = useStyles(); 
    const addPlace = useContext(AddPlaceContext); 

    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <StatusSelect/>
                </Grid>
                <Grid item xs={12}>
                    <OpeningDatePicker/>
                </Grid>
                <Grid item xs={12}>
                    <IsAffiliatedCheckbox/>
                </Grid>
                <Grid item xs={12}>
                    <NotesTextField/>
                </Grid>
            </Grid>
            <div className={classes.buttons}>
                <Button
                    onClick={() => addPlace.updateStep(addPlace.step - 1)}
                >
                    Back
                </Button>
                <div className={classes.spacer} />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => addPlace.updateStep(addPlace.step + 1)}
                >
                    Next
                </Button>
            </div>
        </React.Fragment>
    )
}