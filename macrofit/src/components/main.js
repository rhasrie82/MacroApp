import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';
import Journal from './journal';
import Shopping from './shopping';
import AboutUs from './aboutus';
import Search from './search';
import Todo from "./shopping";
import Detail from "../pages/Detail";
import NoMatch from "../pages/NoMatch";


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutus" component={AboutUs} />
        <Route exact path="/journal" component={Journal} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/search" component={Search} />/>
        <Route exact path="/journal/:id" component={Detail} />
        <Route component={NoMatch} />
    </Switch>
)

export default Main;