import React from 'react';

import { BlocoValores, BoxSizing, Size, Valores, Palavras, } from './styled';

type TamanhoProps = {
    tamanho?: string;
    valor: number;
}

const PequenoCard: React.FC<TamanhoProps> = ({ tamanho, valor }) => {
    return (
        <BoxSizing>
            <BlocoValores>
                <Valores>
                    {valor}
                </Valores>
                {tamanho ? <Size>{tamanho}</Size> : <Palavras>PACK</Palavras>}
            </BlocoValores>
        </BoxSizing>
    );
};

export default PequenoCard;