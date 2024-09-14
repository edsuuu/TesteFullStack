import React from 'react';
import { FaEquals } from 'react-icons/fa';
import { InformacoesDoPack, ValoresEtamanho } from './styled';
import PequenoCard from '../PequenoCard';

type SizeProps = {
    tamanhoG: number;
    tamanhoGG: number;
    tamanhoM: number;
    tamanhoP: number;
}

const SizeProducts: React.FC<SizeProps> = ({ tamanhoG, tamanhoGG, tamanhoM, tamanhoP }) => {

    const somarPack = (tamG: number, tamGG: number, tamM: number, tamP: number) => {
        return tamG + tamGG + tamM + tamP;
    };

    return (
        <InformacoesDoPack>
            <ValoresEtamanho>
                <PequenoCard tamanho={'G'} valor={tamanhoG} />
            </ValoresEtamanho>
            <ValoresEtamanho>
                <PequenoCard tamanho={'GG'} valor={tamanhoGG} />
            </ValoresEtamanho>
            <ValoresEtamanho>
                <PequenoCard tamanho={'M'} valor={tamanhoM} />
            </ValoresEtamanho>
            <ValoresEtamanho>
                <PequenoCard tamanho={'P'} valor={tamanhoP} />
            </ValoresEtamanho>
            <div>
                <span>
                    <FaEquals size={15} color={'#d8d8d8'} />
                </span>
            </div>
            <ValoresEtamanho>
                <PequenoCard valor={somarPack(tamanhoG, tamanhoGG, tamanhoM, tamanhoM)} />
            </ValoresEtamanho>
        </InformacoesDoPack>
    );
};
export default SizeProducts;