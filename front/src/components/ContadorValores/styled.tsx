import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid #ccc;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    gap: 10px;

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

    @media (max-width: 468px) {
        button{
            padding: 15px 13px;

        }

    }

`;

export const Paragraph = styled.div`
    border: 1px solid #6f97ab;
    color: #6f97ab;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 1.5rem;

    @media (max-width: 450px) {
        font-size: 1.1rem;

    }
`;

export const Precos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p:nth-child(1){
        font-weight: bold;
    }

    @media (max-width: 400px) {
        p:nth-child(1){
            font-weight: bold;
            font-size: 0.92rem;
        }
        p:nth-child(2){
            font-weight: normal;
            font-size: 0.85rem;
        }
    }

`;
