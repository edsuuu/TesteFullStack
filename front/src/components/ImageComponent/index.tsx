import React from 'react';
import styled from 'styled-components';

type ImageProps = {
    company_key: string | undefined;
    path: string | undefined;
}

export const Container = styled.div`
    border: 1px solid #5da0ad;
    padding: 2px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    img {
        width: 25px;
        height: 35px
    }

`;

const ImageComponent: React.FC<ImageProps> = ({ company_key, path }) => {
    return (
        <Container>
            <img src={`https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/${company_key}/${path}`} alt={path} />
        </Container>
    );
};

export default ImageComponent;