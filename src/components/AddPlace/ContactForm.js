import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AddPlaceContext} from './context'; 
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'; 
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles((theme) => ({
    field: {
        marginTop: theme.spacing(3)
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(3)
    },
    spacer: {
        flexGrow: 1
    }
}));

export default function ContactForm() {
    const context = useContext(AddPlaceContext); 
    const classes = useStyles(); 

    const handleNameChange = e => context.updateContactName(e.target.value); 
    const handleEmailChange = e => context.updateContactEmail(e.target.value); 

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Can we contact you in case we have any questions?
            </Typography>
            <Typography variant="subtitle1">
                We will only reach out to you on rare occasions, such as to check in on your opening day and whether recent news have affected your business so we can update the website. 
            </Typography>
            <FormControl fullWidth disabled={context.loading} className={classes.field}>
                <TextField label="Name" variant="outlined" onChange={handleNameChange} />
            </FormControl>
            <FormControl fullWidth disabled={context.loading} className={classes.field}>
                <TextField label="Email" variant="outlined" onChange={handleEmailChange} />
            </FormControl>
            <div className={classes.buttons}>
                <Button
                    onClick={() => context.updateStep(context.step - 1)}
                >
                    Back
                </Button>
                <div className={classes.spacer} />
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => context.submit()}
                    disabled={context.loading}
                >
                    Done
                </Button>
            </div>
        </React.Fragment>
    )
}