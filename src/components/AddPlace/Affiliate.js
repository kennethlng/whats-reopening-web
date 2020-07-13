import React, { useContext } from 'react';
import { AddPlaceContext} from './context'; 
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput'; 
import InputLabel from '@material-ui/core/InputLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
}));

const options = ["Yes", "No"]

export default function Affiliate() {
    const context = useContext(AddPlaceContext); 
    const classes = useStyles(); 
    const [value, setValue] = React.useState(options[options.length - 1])

    const handleRadioChange = e => setValue(e.target.value); 
    const handleNameChange = e => context.updateAffiliateName(e.target.value); 
    const handleEmailChange = e => context.updateAffiliateEmail(e.target.value); 

    return (
        <form>
            <FormControl fullWidth>
                <FormLabel>Are you affiliated with the place, for example, as the owner or as an employee?</FormLabel>
                <RadioGroup value={value} onChange={handleRadioChange}>
                    {options.map(option => <FormControlLabel value={option} control={<Radio/>} label={option}/>)}
                </RadioGroup>
            </FormControl>
            {value === "Yes" ? 
                <div>
                    <FormControl fullWidth>
                        <TextField label="Name" variant="outlined" onChange={handleNameChange} />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="Email" variant="outlined" onChange={handleEmailChange} />
                    </FormControl>
                </div>
                : null
            }
        </form>
    )
}