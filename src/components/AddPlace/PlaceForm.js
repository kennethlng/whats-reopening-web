import React, { useContext } from 'react';
import { AddPlaceContext } from './context';
import { StatusSelect } from '../Status';
import OpeningDatePicker from './OpeningDatePicker'; 
import IsAffiliatedCheckbox from './IsAffiliatedCheckbox'; 
import NotesTextField from './NotesTextField'; 
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; 
import { TypeCheckboxGroup } from '../Types';

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

    const handleStatusChange = status => addPlace.updateStatus(status); 

    const handleTypeCheckedChange = state => addPlace.updateTypeCheckedState(state); 

    return (
        <React.Fragment>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <StatusSelect 
                        status={addPlace.status}
                        onChange={handleStatusChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <OpeningDatePicker/>
                </Grid>
                <Grid item xs={12}>
                    <TypeCheckboxGroup
                        state={addPlace.typeCheckedState}
                        onChange={handleTypeCheckedChange}
                    />
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