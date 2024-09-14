import styled from 'styled-components';

export const Container = styled.div`
    /* background-color: #81aa80; */
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


    .containerMiniaturas{
        display: flex;
        flex-direction: row;
        gap: 10px;

    }


`;
