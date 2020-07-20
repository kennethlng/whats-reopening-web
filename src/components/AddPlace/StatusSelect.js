import React, { useContext } from 'react';
import { AddPlaceContext } from './context'; 
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import * as STATUS from '../../constants/status'; 
import TextField from '@material-ui/core/TextField'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    other: {
        marginTop: theme.spacing(2)
    }
}));

export default function StatusSelect() {
    const context = useContext(AddPlaceContext); 
    const classes = useStyles(); 

    const handleChange = (e) => context.updateStatus(e.target.value); 

    return (
        <React.Fragment>
            <FormControl variant="outlined" fullWidth>
                <InputLabel>Current status</InputLabel>
                <Select
                    disabled={context.loading}
                    value={context.status}
                    onChange={handleChange}
                >
                    <MenuItem value={STATUS.OPEN}>Open</MenuItem>
                    <MenuItem value={STATUS.LIMITED_OPEN}>Open but with limited capacity</MenuItem>
                    <MenuItem value={STATUS.TEMPORARILY_CLOSED}>Temporarily closed</MenuItem>
                    <MenuItem value={STATUS.PERMANENTLY_CLOSED}>Permanently closed</MenuItem>
                    <MenuItem value={STATUS.OTHER}>Other</MenuItem>
                </Select>
            </FormControl>
            {context.status === STATUS.OTHER ? 
                <TextField
                    label="Describe your status"
                    fullWidth
                    onChange={handleChange}
                    className={classes.other}
                />
                : null
            }
        </React.Fragment>
    )
}