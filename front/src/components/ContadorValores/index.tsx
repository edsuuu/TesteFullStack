import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { Container, Paragraph, Precos } from './styled';

type ContadorProps = {
    precoAtual: number,
    quantidade: number,
    aumentarQuantidade: () => void;
    diminuirQuantidade: () => void;
}

const ContadorValores: React.FC<ContadorProps> = ({ precoAtual, quantidade, aumentarQuantidade, diminuirQuantidade }) => {

    function totalAcumuladoDosProdutos(): number {
        let somaTotal = 0;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key && key.startsWith('quantidade_produto_')) {
                const quantidadeArmazenada = localStorage.getItem(key);

                if (quantidadeArmazenada) {
                    const dadosProduto = JSON.parse(quantidadeArmazenada);
                    const quantidade = dadosProduto.quantidade || 0;
                    const valor = dadosProduto.valorDoPack || 0;

                    somaTotal += quantidade * valor;
                }
            }
        }

        return somaTotal;
    }

    const acc = totalAcumuladoDosProdutos();

    const acumuladoFormatado = acc.toFixed(2).replace('.', ',');
    const precoFormatado = precoAtual.toFixed(2).replace('.', ',');

    return (
        <Container>
            <Precos>
                <p>Preço Atual</p>
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
                <p>Acumulado</p>
                <p>R$ {acumuladoFormatado}</p>

            </Precos>
        </Container>
    );
};
export default ContadorValores;