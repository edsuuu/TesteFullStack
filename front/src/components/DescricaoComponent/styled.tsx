import styled from 'styled-components';

export const InfoQuantidade = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    font-size: 1.1rem;

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #5da0ad;
        padding: 10px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        &:active {
            transform: scale(0.96)
        }
    }

`;