import React from 'react';
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

export default function StatusSelect(props) {
    const classes = useStyles(); 
    const { status, onChange } = props; 

    const handleChange = e => onChange(e.target.value); 

    return (
        <React.Fragment>
            <FormControl variant="outlined" fullWidth>
                <InputLabel>Current status</InputLabel>
                <Select
                    value={status}
                    onChange={handleChange}
                >
                    <MenuItem value={STATUS.OPEN.ID}>{STATUS.OPEN.TITLE}</MenuItem>
                    <MenuItem value={STATUS.LIMITED_OPEN.ID}>{STATUS.LIMITED_OPEN.TITLE}</MenuItem>
                    <MenuItem value={STATUS.TEMPORARILY_CLOSED.ID}>{STATUS.TEMPORARILY_CLOSED.TITLE}</MenuItem>
                    <MenuItem value={STATUS.PERMANENTLY_CLOSED.ID}>{STATUS.PERMANENTLY_CLOSED.TITLE}</MenuItem>
                    <MenuItem value={STATUS.OTHER.ID}>Other</MenuItem>
                </Select>
            </FormControl>
            {status === STATUS.OTHER ? 
                <TextField
                    label="Describe your status"
                    fullWidth
                    onChange={handleChange}
                    className={classes.other}
                    // helperText="Can you describe the status of the place?"
                />
                : null
            }
        </React.Fragment>
    )
}