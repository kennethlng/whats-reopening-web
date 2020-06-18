import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import * as ROUTES from '../../constants/routes'; 
import { NavigationBar } from '../NavigationBar'; 
import { Landing } from '../Landing'; 
import { AddPlace } from '../AddPlace';
import Container from '@material-ui/core/Container';

const Main = () => (
    <div>
        <NavigationBar/>
        <Container maxWidth="lg">
            <Switch>
                <Route exact path={ROUTES.LANDING} component={Landing}/>
                <Route path={ROUTES.ADD_PLACE} component={AddPlace}/>
            </Switch>
        </Container>
    </div>
)

export default Main; 