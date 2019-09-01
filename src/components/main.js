import React from 'react';
import {Switch, Route } from 'react-router-dom';
import contact from './contact'
import projects from './projects'
import resume from './resume'

import Landingpage from './landingpage';
const Main=()=>(
    <Switch>
        <Route exact path="/" component={Landingpage} />
        <Route  path="/contact" component={contact} />
        <Route  path="/projects" component={projects} />
        <Route  path="/resume" component={resume} />
        

    </Switch>
)
export default Main;