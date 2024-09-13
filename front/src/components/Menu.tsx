import React, { useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styled from 'styled-components';

export const Navbar = styled.div`
    background-color: #809caa;
    padding: 8px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CategoriasDivs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    color: #809caa;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    .textos{
        background-color: white;
        padding: 5px;
        border-radius: 5px;
    }

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: none;
        color: #809caa;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;

        &:active {
            transform: scale(0.96)
        }
    }
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: white;
        border: none;
        color: #809caa;
        cursor: pointer;
        padding: 5px 8px;
        border-radius: 50%;

        &:active {
            transform: scale(0.96)
        }
    }
`;

type MenuProps = {
    categorias: string[];
    quantidadePorCategoria: number
}

const Menu: React.FC<MenuProps> = ({ categorias, quantidadePorCategoria }) => {
    const [indiceAtual, setIndiceAtual] = useState(0);

    const trocarCategoria = () => {
        setIndiceAtual((prevIndice) =>
            prevIndice < categorias.length - 1 ? prevIndice + 1 : 0
        );
    };

    const voltarCategoria = () => {
        setIndiceAtual((prevIndice) =>
            prevIndice > 0 ? prevIndice - 1 : categorias.length - 1
        );
    };

    return (
        <Navbar>
            <div>
                <MdArrowBackIosNew color='white' cursor={'pointer'} fontWeight={'bold'}/>
            </div>
            <CategoriasDivs>
                <button onClick={voltarCategoria}>
                    <MdArrowBackIosNew />
                </button>

                <div className='textos'>
                    <p>
                        {`(${quantidadePorCategoria}) ${categorias[indiceAtual] ? categorias[indiceAtual] : 'Categorias'}`}
                    </p>
                </div>

                <button onClick={trocarCategoria}>
                    <MdArrowForwardIos />
                </button>
            </CategoriasDivs>
            <Right>
                <button>F</button>
            </Right>
        </Navbar>
    );
};

export default Menu;