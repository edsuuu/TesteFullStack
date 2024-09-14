import React from 'react';
import { Produto } from '../../pages/Home/interfaces';
import ImageComponent from '../ImageComponent';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { ContainerImg } from './styled';

type ImagePrincipalProps = {
    produtoAtual: Produto | null
    alterarProxProduto: () => void
    alterarAntesProduto: () => void
};

const ImagemPrincipal: React.FC<ImagePrincipalProps> = ({ produtoAtual, alterarAntesProduto, alterarProxProduto }) => {
    return (
        <ContainerImg>
            <ImageComponent company_key={produtoAtual?.images[0].companies_key} path={produtoAtual?.images[0].path} />
            <div className='buttons-trocar-produts'>
                <button
                    onClick={alterarAntesProduto}
                >
                    <MdArrowBackIosNew />
                </button>
                <button
                    onClick={alterarProxProduto}
                >
                    <MdArrowForwardIos />
                </button>
            </div>
            <div className='linha-img'></div>
        </ContainerImg >
    );
};

export default ImagemPrincipal;