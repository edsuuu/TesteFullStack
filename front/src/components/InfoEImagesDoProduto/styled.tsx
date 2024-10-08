import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    padding: 5px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #ccc;
    margin: 0 15px;

    button {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        background-color: #809caa;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        padding: 10px;
        border: none;
        &:active{
            transform: scale(0.97);
        }
    }

`;

export const Miniaturas = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    cursor: pointer;

    img {
        border: 1px solid #809caa;
        width: 25px;
        height: 35px
    }
`;