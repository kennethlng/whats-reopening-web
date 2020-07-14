import React, { useContext } from 'react';
import { AddPlaceContext} from './context'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const options = ["Yes", "No"]

export default function Affiliate() {
    const context = useContext(AddPlaceContext); 
    const [value, setValue] = React.useState(options[options.length - 1])

    const handleRadioChange = e => setValue(e.target.value); 
    const handleNameChange = e => context.updateAffiliateName(e.target.value); 
    const handleEmailChange = e => context.updateAffiliateEmail(e.target.value); 

    return (
        <div>
            <FormControl fullWidth disabled={context.loading}>
                <FormLabel>Are you affiliated with the place, for example, as the owner or as an employee?</FormLabel>
                <RadioGroup value={value} onChange={handleRadioChange}>
                    {options.map(option => <FormControlLabel key={option} value={option} control={<Radio/>} label={option}/>)}
                </RadioGroup>
            </FormControl>
            {value === "Yes" ? 
                <div>
                    <FormControl fullWidth disabled={context.loading}>
                        <TextField label="Name" variant="outlined" onChange={handleNameChange} />
                    </FormControl>
                    <FormControl fullWidth disabled={context.loading}>
                        <TextField label="Email" variant="outlined" onChange={handleEmailChange} />
                    </FormControl>
                </div>
                : null
            }
        </div>
    )
}