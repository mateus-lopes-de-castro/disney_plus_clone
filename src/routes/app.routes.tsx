import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

const AppRoutes: React.FC = () => {
    
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/detail/:id" component={Detail} />
            </Switch>
        </>
    )
};

export default AppRoutes;