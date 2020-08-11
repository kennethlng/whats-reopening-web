import React, { useState } from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { types } from './types'; 
import Grid from '@material-ui/core/Grid'; 

export default function TypeCheckboxGroup(props) {
    const { state, onChange } = props; 
    const handleChange = (e) => onChange({ ...state, [e.target.name]: e.target.checked });

    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Type of place</FormLabel>
            <FormGroup>
                <Grid container>
                    {types.map(t => (
                        <Grid item key={t.ID} md={4} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox checked={state[t.ID] ? state[t.ID] : false} onChange={handleChange} name={t.ID}/>}
                                label={t.TITLE}
                            />
                        </Grid>
                    ))}
                </Grid>
            </FormGroup>
        </FormControl>
    )
}