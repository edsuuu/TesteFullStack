import React from 'react';
import { ModalsContainer } from './styled';
import { IoCloseSharp } from 'react-icons/io5';

type InformacoesModalProps = {
    handleModalInfo: () => void;
    nomeDoProduto: string | null;
    referenciaDoProduto: string | null;
    marcaDoProduto: string | null;
    categoriaDoProduto: string | null;
    generoDoProduto: string | null;

}

const InformacoesModal: React.FC<InformacoesModalProps> = ({ nomeDoProduto, referenciaDoProduto, marcaDoProduto, categoriaDoProduto, generoDoProduto, handleModalInfo }) => {
    return (
        <ModalsContainer>
            <div className='main-modal'>
                <div className='title-main'>
                    <h3>Informações</h3>
                    <button onClick={handleModalInfo}><IoCloseSharp size={20} /></button>
                </div>
                <div className='InfoModal'>
                    <div>
                        <h3>Cores</h3>
                    </div>
                    <div>
                        <p>Nome do produto: {nomeDoProduto ? nomeDoProduto : 'Produto'}</p>
                        <p>Referencia: {referenciaDoProduto ? referenciaDoProduto : 'Referencia'}</p>
                        <p>Marca: {marcaDoProduto ? marcaDoProduto : 'Marca'}</p>
                        <p>Categoria: {categoriaDoProduto ? categoriaDoProduto : 'Categoria'}</p>
                        <p>Genero: {generoDoProduto ? generoDoProduto : 'Genero'}</p>
                    </div>
                </div>
            </div>
        </ModalsContainer>
    );
};

export default InformacoesModal;