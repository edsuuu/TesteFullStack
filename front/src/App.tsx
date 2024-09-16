import React from 'react';
import { GlobalStyled } from './styles/GlobalStyled';
import { BrowserRouter } from 'react-router-dom';
import RotasRegistradas from './rotas';
import { ProdutosProvider } from './contexts';

const App: React.FC = () => {
    return (
        <ProdutosProvider>
            <BrowserRouter>
                <RotasRegistradas />
                <GlobalStyled />
            </BrowserRouter>
        </ProdutosProvider>
    );
};

export default App;
