import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Container } from './styled';

type ContadorProps = {
    precoAtual: number,
    quantidade: number,
    acumulado: number,
    aumentarQuantidade: () => void;
    diminuirQuantidade: () => void;
}

const ContadorValores: React.FC<ContadorProps> = ({ precoAtual, quantidade, acumulado, aumentarQuantidade, diminuirQuantidade }) => {
    const acumuladoFormatado = acumulado.toFixed(2).replace('.', ',');
    const precoFormatado = precoAtual.toFixed(2).replace('.', ',');

    return (
        <Container>
            <div className='prices-div'>
                <h4>Preço Atual</h4>
                <p>R$ {precoFormatado}</p>
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
                <p>R$ {acumuladoFormatado}</p>
            </div>
        </Container>
    );
};
export default ContadorValores;