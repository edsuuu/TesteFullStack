import styled from 'styled-components';

export const Navbar = styled.div`
    background-color: #809caa;
    padding: 6px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const CategoriasDivs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    color: #809caa;
    font-weight: bold;
    cursor: pointer;

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: none;
        color: #809caa;
        cursor: pointer;
        padding: 4px;
        border-radius: 50%;

        &:active {
            transform: scale(0.96)
        }
    }
`;

export const Textos = styled.div`
    background-color: white;
    padding: 3px 5px;
    border-radius: 5px;
    font-size: 0.8rem;
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
        padding: 2px 8px;
        border-radius: 50%;

        &:active {
            transform: scale(0.96)
        }
    }
`;
