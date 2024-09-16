import styled from 'styled-components';

export const BoxSizing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Valores = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0px 15px;
    justify-content: center;
    border-radius: 6px;
    background-color: white;
    color:#809caa;
    font-weight: 500;
    font-size: 1.2rem;
`;

export const BlocoValores = styled.div`
    position: relative;
    display: inline-block;
`;

export const Size = styled.div`
    position: absolute;
    top: -13px;
    right: -9px;
    background-color: #809caa;
    border: 1px solid white;
    color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
`;

export const Palavras = styled.div`
    position: absolute;
    top: -20px;
    right: 15px;
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;

`;

export const PackDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p:nth-child(1){
        font-size: 0.9rem;
    }
    p:nth-child(2){
        background-color: white;
        padding: 6px 12px;
        border-radius: 10px;
    }
`;
