import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import { withRouter, useLocation } from 'react-router-dom'; 
import * as ROUTES from '../../constants/routes';
import logo from '../../assets/images/logo.png';
import RoomIcon from '@material-ui/icons/Room';
import Container from '@material-ui/core/Container';
import { GoogleMapsPlacesAutocomplete } from '../GoogleMapsPlacesAutocomplete'

const useStyles = makeStyles(theme => ({ 
    root: {
        flexGrow: 1,
    },
    bar: {
        background: '#ffffff'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    spacer: {
        flexGrow: 1,
    },
    logo: {
        textTransform: "none",
        color: "#00a3ff"
    }
}))

function NavigationBar(props) {
    const classes = useStyles(); 
    const location = useLocation(); 

    const handleLogoClick = () => props.history.push(ROUTES.LANDING)
    const handleAddPlaceClick = () => props.history.push(ROUTES.ADD_PLACE)

    return (
        <div className={classes.root}>
            <AppBar className={classes.bar} position="fixed" elevation={0}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <Button className={classes.logo} color="inherit" onClick={handleLogoClick}> 
                            <RoomIcon/>
                            <Typography variant="h5">
                                <b>WhatsReopening.com</b>
                            </Typography>
                        </Button>
                        <div className={classes.spacer}/>
                        {location.pathname === ROUTES.ADD_PLACE ? 
                            null
                            :
                            <Button disableElevation variant="contained" onClick={handleAddPlaceClick}>
                                Add a place
                            </Button>
                        }
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default withRouter(NavigationBar); 