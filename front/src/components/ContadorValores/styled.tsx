import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    gap: 10px;
    font-family: "Poppins", sans-serif;


    button {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        background-color: #809caa;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        padding: 15px;
        border: none;
        &:active{
            transform: scale(0.94);
        }
    }

    .paragraph{
        border: 1px solid #6f97ab;
        color: #6f97ab;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5px;
        font-size: 1.5rem;
    }
    .prices-div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
`;