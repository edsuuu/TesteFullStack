import React from 'react';
import { Container } from './styled';

type ImageProps = {
    company_key: string | undefined;
    path: string | undefined;
}

const ImageComponent: React.FC<ImageProps> = ({ company_key, path }) => {
    return (
        <Container>
            <img src={`https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/${company_key}/${path}`} alt={path} />
        </Container>
    );
};

export default ImageComponent;