import React from 'react';
import { Produto } from '../../pages/Home/interfaces';
import ImageComponent from '../ImageComponent';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { ButtonsTrocarProdutos, ContainerImg, Linha } from './styled';

type ImagePrincipalProps = {
    produtoAtual: Produto | null
    alterarProxProduto: () => void
    alterarAntesProduto: () => void
    imageIndex: number
};

const ImagemPrincipal: React.FC<ImagePrincipalProps> = ({ produtoAtual, alterarAntesProduto, alterarProxProduto, imageIndex }) => {

    return (
        <ContainerImg>
            <div>
                <ImageComponent company_key={produtoAtual?.images[0].companies_key} path={produtoAtual?.images[imageIndex].path} />
            </div>

            <ButtonsTrocarProdutos>
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
            </ButtonsTrocarProdutos>
            <Linha></Linha>
        </ContainerImg >
    );
};

export default ImagemPrincipal;