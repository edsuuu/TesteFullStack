import React from 'react';
import { InfoModal, MainModal, ModalsContainer, TitleMain } from './styled';
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
            <MainModal>
                <TitleMain>
                    <h3>Informações</h3>
                    <button onClick={handleModalInfo}><IoCloseSharp size={20} /></button>
                </TitleMain>
                <InfoModal>
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
                </InfoModal>
            </MainModal>
        </ModalsContainer>
    );
};

export default InformacoesModal;