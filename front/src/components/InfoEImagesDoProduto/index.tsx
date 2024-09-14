import React from 'react';
import { Container, Miniaturas } from './styled';
import { FaExclamation, FaShoppingCart } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import ImageComponent from '../ImageComponent';
import { Produto } from '../../pages/Home/interfaces';

type CustosDoProdutoComponentProps = {
    setModalInfo: () => void;
    setModalBuscar: () => void;
    produtoAtual: Produto | null;
}

const InfoEImagesDoProduto: React.FC<CustosDoProdutoComponentProps> = ({ produtoAtual, setModalInfo, setModalBuscar }) => {
    return (
        <Container>
            <button onClick={setModalInfo}>
                <FaExclamation size={18} />
            </button>
            <button onClick={setModalBuscar}>
                <FaMagnifyingGlass size={18} />
            </button>
            <Miniaturas>
                {produtoAtual?.images.map((item, index) => (
                    <ImageComponent key={index} company_key={item.companies_key} path={item.path} />
                ))}
            </Miniaturas>
            <button>
                <FaShoppingCart size={18} />
            </button>
        </Container>
    );
};

export default InfoEImagesDoProduto;