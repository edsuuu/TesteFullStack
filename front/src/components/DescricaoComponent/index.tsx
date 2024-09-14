import React from 'react';
import { InfoQuantidade } from './styled';
import { TbArrowsUpDown } from 'react-icons/tb';

type DescricaoComponentProps = {
    setTrocarDiv: () => void;

    categoria?: string;
    referencia?: string;
    preco?: number;
}

const DescricaoComponent: React.FC<DescricaoComponentProps> = ({ setTrocarDiv, categoria, referencia, preco }) => {
    const precoConvertido = preco?.toFixed(2).replace('.', ',');

    return (
        <InfoQuantidade>
            <button onClick={setTrocarDiv}>
                <TbArrowsUpDown size={18} color='white' />
            </button>
            <p>{categoria ? categoria : 'Categoria'}</p>
            <p>Ref {referencia ? referencia : 'Referencia'}</p>
            <p>R$ {precoConvertido ? precoConvertido : '0,00'}</p>
        </InfoQuantidade>
    );
};

export default DescricaoComponent;