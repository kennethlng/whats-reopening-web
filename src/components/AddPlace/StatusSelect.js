import React, { useContext } from 'react';
import { AddPlaceContext } from './context'; 
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {}
}))

const options = ["Open", "Open but with limited capacity", "Temporarily closed", "Permanently closed", "Other"]

export default function StatusSelect() {
    const context = useContext(AddPlaceContext); 
    const classes = useStyles(); 

    const handleChange = (e) => {
        context.updateStatus(e.target.value); 
    }

    return (
        <div>
            <FormControl fullWidth className={classes.formControl}>
                <InputLabel>Current status</InputLabel>
                <Select
                    disabled={context.loading}
                    value={context.status}
                    onChange={handleChange}
                >
                    {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                </Select>
            </FormControl>
        </div>
    )
}