import React from 'react';
import { statuses } from '../Status';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

export default function StatusCheckboxGroup(props) {
    const { state, onChange } = props;
    
    const handleChange = e => {
        onChange({ 
            ...state,
            [e.target.name]: e.target.checked
        })
    }

    return (
        <FormControl>
            <FormLabel component="legend">Current Status</FormLabel>
            <FormGroup>
                {statuses.map(s => (
                    <FormControlLabel
                        control={<Checkbox checked={state[s.ID]} onChange={handleChange} name={s.ID}/>}
                        label={s.TITLE}
                        key={s.ID}
                    />
                ))}
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
        </FormControl>
    )
}

StatusCheckboxGroup.defaultProps = {
    onChange: () => {}
}