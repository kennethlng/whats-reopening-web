import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { types } from './types'; 
import TextField from '@material-ui/core/TextField'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    other: {
        marginTop: theme.spacing(2)
    }
}));

export default function TypeSelect(props) {
    const classes = useStyles(); 
    const { type, onChange } = props; 

    const handleChange = e => onChange(e.target.value); 

    return (
        <React.Fragment>
            <FormControl variant="outlined" fullWidth>
                <InputLabel>Current status</InputLabel>
                <Select
                    value={type}
                    onChange={handleChange}
                >
                    {types.map(type => <MenuItem value={type.ID}>{type.TITLE}</MenuItem>)}
                </Select>
            </FormControl>
        </React.Fragment>
    )
}