import React from 'react'; 
import { withStyles } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import { withRouter } from 'react-router-dom'; 
import * as ROUTES from '../../constants/routes';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    spacer: {
        flexGrow: 1,
    },
});

class NavigationBar extends React.Component {
    handleLogoClick = () => this.props.history.push(ROUTES.LANDING)
    handleAddPlaceClick = () => this.props.history.push(ROUTES.ADD_PLACE)

    render() {
        const { classes } = this.props; 

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" onClick={this.handleLogoClick}> 
                            <Typography variant="h6">
                                What's Reopening
                            </Typography>
                        </Button>
                        <div className={classes.spacer}/>
                        <Button color="inherit" onClick={this.handleAddPlaceClick}>
                            Add a place
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(NavigationBar)); 