import React from 'react';
import { GlobalStyled } from './styles/GlobalStyled';
import { BrowserRouter } from 'react-router-dom';
import RotasRegistradas from './rotas';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <RotasRegistradas />
            <GlobalStyled />
        </BrowserRouter>
    );
};

export default App;
