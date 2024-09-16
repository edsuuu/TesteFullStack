import React, { useReducer } from 'react';
import { ProdutosContext } from './modules/context';
import { initialStateProducts } from './modules/initialState';
import { reducer } from './modules/reducer';

type ProdutoProviderProps = {
    children: React.ReactNode;
};

export const ProdutosProvider: React.FC<ProdutoProviderProps> = ({ children }) => {
    const [produtosState, setProdutosDispatch] = useReducer(reducer, initialStateProducts);

    return (
        <ProdutosContext.Provider value={{ produtosState, setProdutosDispatch }}>
            {children}
        </ProdutosContext.Provider>
    );
};