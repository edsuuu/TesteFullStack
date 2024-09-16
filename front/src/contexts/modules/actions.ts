/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpRequest } from '../../services/HttpRequest';
import * as types from './types';

export const carregarTodosProdutos = async (dispatch: any) => {

    try {
        const produtosAll = await HttpRequest.get('/produtos');

        dispatch({
            type: types.PRODUTOS_SUCCESS,
            payload: produtosAll.data
        });

        return produtosAll.data;

    } catch (error) {
        console.log(error);
    }

};
