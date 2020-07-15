import React, { useContext } from 'react';
import { AddPlaceContext } from './context';
import TextField from '@material-ui/core/TextField';

export default function NotesTextField() {
    const context = useContext(AddPlaceContext); 
    const handleChange = e => context.updateNotes(e.target.value); 

    return (
        <TextField
            label="Additional notes"
            variant="outlined"
            multiline
            onChange={handleChange}
            fullWidth
            disabled={context.loading}
            helperText="Include other info that might help others, such as "
        />
    )
}