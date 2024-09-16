/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';
import { Produto } from '../../pages/Home/interfaces';

interface ProdutosState {
    produtos: Produto[]
}

interface ProdutosContextType {
    produtosState: ProdutosState;
    setProdutosDispatch: React.Dispatch<any>;
}

export const ProdutosContext = createContext<ProdutosContextType | undefined>(undefined);
