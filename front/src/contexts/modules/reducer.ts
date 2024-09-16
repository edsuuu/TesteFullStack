/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import * as types from './types';

export const reducer = (state: any, action: any) => {
    switch (action.type) {
        case types.PRODUTOS_SUCCESS: {

            return {
                ...state,
                produtos: action.payload,
                loading: false
            };
        }

        default:
            return state;
    }
};
