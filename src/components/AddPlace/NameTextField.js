import React, { useContext } from 'react';
import { AddPlaceContext } from './context';
import TextField from '@material-ui/core/TextField'; 

export default function NameTextField() {
    const context = useContext(AddPlaceContext); 
    const handleChange = e => context.updateName(e.target.value); 

    return (
        <TextField fullWidth label="Place name" required onChange={handleChange}/>
    )
}