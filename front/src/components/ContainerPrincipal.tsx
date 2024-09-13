import React from 'react';
import { FaEquals } from 'react-icons/fa';
import styled from 'styled-components';

type SizeProps = {
    tamanhoG: number;
    tamanhoGG: number;
    tamanhoM: number;
    tamanhoP: number;
}

export const InformacoesDoPack = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    background-color: #809caa;
    display: flex;
    padding: 12px 0px 3px 0px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
`;

export const ValoresEtamanho = styled.div`
    padding: 10px;
`;

export const BoxSizing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Valores = styled.div`
    display: flex;
    flex-direction: row;
    padding: 6px 15px;
    justify-content: center;
    border-radius: 6px;
    background-color: white;
    color:#809caa;
    font-weight: 500;
    font-size: 1.2rem;
`;

export const BlocoValores = styled.div`
    position: relative;
    display: inline-block;
`;

export const Size = styled.div`
    position: absolute;
    top: -13px;
    right: -9px;
    background-color: #809caa;
    border: 1px solid white;
    color: white;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
`;

export const Palavras = styled.div`
    position: absolute;
    top: -20px;
    right: 15px;
    color: white;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;

`;

export const PackDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p:nth-child(1){
        font-size: 0.9rem;
    }
    p:nth-child(2){
        background-color: white;
        padding: 6px 12px;
        border-radius: 10px;
    }
`;

type TamanhoProps = {
    tamanho?: string;
    valor: number
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

const SizeProducts: React.FC<SizeProps> = ({ tamanhoG, tamanhoGG, tamanhoM, tamanhoP }) => {

    const somarPack = () => {
        return tamanhoG + tamanhoGG + tamanhoM + tamanhoP;
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
                    <FaEquals size={15} color={'#d8d8d8'}/>
                </span>
            </div>
            <ValoresEtamanho>
                <PequenoCard valor={somarPack()} />
            </ValoresEtamanho>
        </InformacoesDoPack>
    );
};
export default SizeProducts;