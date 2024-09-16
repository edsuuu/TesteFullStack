import React from 'react';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { CategoriasDivs, Navbar, Right, Textos } from './styled';

type MenuProps = {
    categorias: string;
    quantidadePorCategoria: { category: string, count: number }[];
    voltarCategoria: () => void
    trocarCategoria: () => void
}

const Menu: React.FC<MenuProps> = ({ categorias, quantidadePorCategoria, voltarCategoria, trocarCategoria }) => {
    const quantidadeAtual = quantidadePorCategoria.find(item => item.category === categorias)?.count || 0;

    // const alterarProdutosPorCategoria = (categoria: string, produtos: Produto[]) => {
    //     return produtos.findIndex(produto => produto.category === categoria);
    // };

    // const voltarCategoria = () => {
    //     setIndiceAtual((prevIndice) =>
    //         prevIndice > 0 ? prevIndice - 1 : categorias.length - 1
    //     );
    // };

    // const trocarCategoria = () => {
    //     setIndiceAtual((prevIndice) =>
    //         prevIndice < categorias.length - 1 ? prevIndice + 1 : 0);
    // };

    return (
        <Navbar>
            <div>
                <MdArrowBackIosNew color='white' cursor={'pointer'} fontWeight={'bold'} />
            </div>
            <CategoriasDivs>
                <button onClick={voltarCategoria}>
                    <MdArrowBackIosNew />
                </button>

                <Textos>

                    {/* {quantidadePorCategoria && quantidadePorCategoria.length > 0 ? (
                    quantidadePorCategoria.map((categoria, index) => (
                        <div key={index}>
                            <span>{`(${categoria.count ? categoria.count : 0}) `}</span>
                            <span>{categoria.category ? categoria.category : 'Categoria'}</span>
                        </div>
                    ))
                ) : (
                    <div>
                        <span>{`(${0}) `}</span>
                        <span>{'Categoria'}</span>
                    </div>
                )} */}
                    <p>
                        {`(${quantidadeAtual}) ${categorias ? categorias : 'Categorias'}`}
                    </p>
                </Textos>

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