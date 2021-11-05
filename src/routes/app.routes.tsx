import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

const AppRoutes: React.FC = () => (
    <>
    <Header/>
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Home} />
        <Route path="/detail/:id" component={Detail} />
    </Switch>
    </>
);

export default AppRoutes;