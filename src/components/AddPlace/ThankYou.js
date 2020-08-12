import React from 'react';
import Typography from '@material-ui/core/Typography'; 
import Button from '@material-ui/core/Button'; 
import { useHistory } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: theme.spacing(3)
    }
}));

export default function ThankYou() {
    const classes = useStyles(); 
    const history = useHistory(); 

    const handleClick = () => history.go(0); // Reload page

    return (
        <React.Fragment>
            <Typography variant="h5" gutterBottom>
                Thanks!
            </Typography>
            <Typography variant="subtitle1">
                We appreciate your help supporting the community.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleClick}
                className={classes.button}
            >
                Add another place
            </Button>
        </React.Fragment>
    )
}