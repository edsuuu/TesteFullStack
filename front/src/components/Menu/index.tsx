import React, { useState } from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { CategoriasDivs, Navbar, Right } from './styled';

type MenuProps = {
    categorias: string[];
    quantidadePorCategoria: { category: string, count: number }[];
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

    const categoriaAtual = categorias[indiceAtual];
    const quantidadeAtual = quantidadePorCategoria.find(item => item.category === categoriaAtual)?.count || 0;

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
                        {`(${quantidadeAtual}) ${categoriaAtual ? categoriaAtual : 'Categorias'}`}
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