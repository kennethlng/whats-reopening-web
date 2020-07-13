import React, { useContext } from 'react';
import { AddPlaceContext } from './context';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    
}))

export default function NotesTextField() {
    const classes = useStyles(); 
    const context = useContext(AddPlaceContext); 
    const handleChange = e => context.updateNotes(e.target.value); 

    return (
        <TextField
            label="Additional notes"
            multiline
            onChange={handleChange}
            fullWidth
        />
    )
}