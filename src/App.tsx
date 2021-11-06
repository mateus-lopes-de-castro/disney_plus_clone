import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Routes from './routes';
import { AuthProvider } from './hooks/useAuth';

const App: React.FC = () => {
    
    return (
        <AuthProvider>
            <GlobalStyles />
            <Routes />
        </AuthProvider>
    )
}

export default App;