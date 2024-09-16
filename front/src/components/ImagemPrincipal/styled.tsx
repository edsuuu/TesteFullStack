import styled from 'styled-components';

export const ContainerImg = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* img {
        width: 100%;
        box-sizing: border-box;
    } */


`;

export const Linha = styled.div`
    width: 100%;
    border: 1.5px solid #5da0ad;
`;

export const ButtonsTrocarProdutos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2px 20px;

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #809caa;
        border: none;
        color: white;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;

        &:active {
            transform: scale(0.96)
        }
    }
`;