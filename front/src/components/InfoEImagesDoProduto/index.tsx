import React from 'react';
import { Container, Miniaturas } from './styled';
import { FaExclamation, FaShoppingCart } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Produto } from '../../pages/Home/interfaces';

type CustosDoProdutoComponentProps = {
    setModalInfo: () => void;
    setModalBuscar: () => void;
    produtoAtual: Produto | null;
    handleItemClick: (index: number) => void;
}

const InfoEImagesDoProduto: React.FC<CustosDoProdutoComponentProps> = ({ produtoAtual, setModalInfo, setModalBuscar, handleItemClick }) => {

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
                    <img
                        key={index}
                        src={`https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/${item.companies_key}/${item.path}`} alt={item.path}
                        onClick={() => handleItemClick(index)}
                    />
                ))}

            </Miniaturas>
            <button>
                <FaShoppingCart size={18} />
            </button>
        </Container>
    );
};

export default InfoEImagesDoProduto;