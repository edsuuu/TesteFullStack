import styled from 'styled-components';

export const Navbar = styled.div`
    background-color: #809caa;
    padding: 8px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CategoriasDivs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    color: #809caa;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    .textos{
        background-color: white;
        padding: 5px;
        border-radius: 5px;
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: none;
        color: #809caa;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;

        &:active {
            transform: scale(0.96)
        }
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: none;
        color: #809caa;
        cursor: pointer;
        padding: 5px 8px;
        border-radius: 50%;

        &:active {
            transform: scale(0.96)
        }
    }
`;
