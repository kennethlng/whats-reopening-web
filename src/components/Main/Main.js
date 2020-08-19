import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import * as ROUTES from '../../constants/routes'; 
import { NavigationBar } from '../NavigationBar'; 
import { Landing } from '../Landing'; 
import { AddPlace } from '../AddPlace';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Footer } from '../Footer'; 

const useStyles = makeStyles(theme => ({
    body: {
        marginTop: theme.spacing(16)
    }
}))

const Main = () => {
    const classes = useStyles(); 

    return (
        <div>
            <NavigationBar/>
            <Container maxWidth="lg" className={classes.body}>
                <Switch>
                    <Route exact path={ROUTES.LANDING} component={Landing}/>
                    <Route path={ROUTES.ADD_PLACE} component={AddPlace}/>
                </Switch>
            </Container>
            <Footer/>
        </div>
    )
}

export default Main; 