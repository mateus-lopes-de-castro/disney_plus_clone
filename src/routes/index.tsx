import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header';

import { useAuth } from '../hooks/useAuth';

import Auth from './auth.routes';
import App from './app.routes';

const Routes: React.FC = () => {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            <Header />
            {user.id ? <App /> : <Auth />}
        </BrowserRouter>
    )
}

export default Routes;