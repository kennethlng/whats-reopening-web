import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import { withRouter, useLocation } from 'react-router-dom'; 
import * as ROUTES from '../../constants/routes';

const useStyles = makeStyles(theme => ({ 
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    spacer: {
        flexGrow: 1,
    }  
}))

function NavigationBar(props) {
    const classes = useStyles(); 
    const location = useLocation(); 

    const handleLogoClick = () => props.history.push(ROUTES.LANDING)
    const handleAddPlaceClick = () => props.history.push(ROUTES.ADD_PLACE)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" onClick={handleLogoClick}> 
                        <Typography variant="h6">
                            What's Reopening
                        </Typography>
                    </Button>
                    <div className={classes.spacer}/>
                    {location.pathname === ROUTES.ADD_PLACE ? 
                        null
                        :
                        <Button color="inherit" onClick={handleAddPlaceClick}>
                            Add a place
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withRouter(NavigationBar); 