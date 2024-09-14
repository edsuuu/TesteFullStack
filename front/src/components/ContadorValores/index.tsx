import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Container, Paragraph, Precos } from './styled';

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
            <Precos>
                <h4>Preço Atual</h4>
                <p>R$ {precoFormatado}</p>
            </Precos>
            <button onClick={diminuirQuantidade}>
                <FaMinus />
            </button>
            <Paragraph>
                <p>{quantidade ? quantidade : 0}</p>
            </Paragraph>
            <button onClick={aumentarQuantidade}>
                <FaPlus />
            </button>
            <Precos>
                <h4>Acumulado</h4>
                <p>R$ {acumuladoFormatado}</p>
            </Precos>
        </Container>
    );
};
export default ContadorValores;