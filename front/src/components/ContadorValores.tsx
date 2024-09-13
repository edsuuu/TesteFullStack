import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import styled from 'styled-components';

type ContadorProps = {
    precoAtual: number,
    quantidade: number,
    acumulado: number,
    aumentarQuantidade: () => void;
    diminuirQuantidade: () => void;
}

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
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

const ContadorValores: React.FC<ContadorProps> = ({ precoAtual, quantidade, acumulado, aumentarQuantidade, diminuirQuantidade }) => {
    return (
        <Container>
            <div className='prices-div'>
                <h4>Preço Atual</h4>
                <p>R$ {precoAtual ? precoAtual : '0,00'}</p>
            </div>
            <button onClick={diminuirQuantidade}>
                <FaMinus />
            </button>
            <div className='paragraph'>
                <p>{quantidade ? quantidade : 0}</p>
            </div>
            <button onClick={aumentarQuantidade}>
                <FaPlus />
            </button>
            <div className='prices-div'>
                <h4>Acumulado</h4>
                <p>R$ {acumulado ? acumulado : '0,00'}</p>
            </div>
        </Container>
    );
};
export default ContadorValores;