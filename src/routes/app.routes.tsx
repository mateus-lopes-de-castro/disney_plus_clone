import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" />
    </Switch>
);

export default AppRoutes;