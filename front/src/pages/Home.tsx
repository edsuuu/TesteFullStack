import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Menu from '../components/Menu';
import SizeProducts from '../components/ContainerPrincipal';
import ContadorValores from '../components/ContadorValores';
import { FaExclamation, FaShoppingCart } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { TbArrowsUpDown } from 'react-icons/tb';
import { IoCloseSharp } from 'react-icons/io5';
import { HttpRequest } from '../services/HttpRequest';
import { Produto } from './interfaces';

export const Container = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    width: 600px;
    height: 100vh;
    margin: 0 auto;
    font-family: "Poppins", sans-serif;

`;

export const InfoQuantidade = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    font-size: 1.1rem;

    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #5da0ad;
        padding: 10px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        &:active {
            transform: scale(0.96)
        }
    }

`;

export const InfoImagens = styled.div`
    /* background-color: #81aa80; */
    display: flex;
    padding: 5px 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid #ccc;
    margin: 0 15px;

    button {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        background-color: #809caa;
        border-radius: 50%;
        color: white;
        cursor: pointer;
        padding: 10px;
        border: none;
        &:active{
            transform: scale(0.97);
        }
    }


    .containerMiniaturas{
        display: flex;
        flex-direction: row;
        gap: 10px;

    }

    .imagesMiniaturas{

        border: 1px solid #5da0ad;
        padding: 2px;
        cursor: pointer;
        img {
            width: 25px;
        }
    }

`;

export const SectionContainerMain = styled.div`
    .containerImg{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 85%;

        }
    }
    .linha-img{
        width: 100%;
        border: 1.5px solid #5da0ad;
    }
`;

export const ModalsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #0505054d;

    .main-modal{
        width: 400px;
        height: 400px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: white;
        color: black;
    }
    .title-main{
        background-color:#809caa;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        text-align: center;
        color: white;
        button {
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
            &:active{
                transform: scale(0.95);
            }
        }
    }

    .InfoModal{
        div:nth-child(1){
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 1.1rem;

        }
        div:nth-child(2){
            display: flex;
            flex-direction: column;
            font-size: 1rem;
            padding: 10px 20px;
            gap: 3px;
        }
    }

    .search-pesquisa{

    }

`;

const Home: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const [categorias, setCategorias] = useState<string[]>([]);
    const [trocarDiv, SetTrocarDiv] = useState<boolean>(false);
    const [quantidade, setQuantidade] = useState<number>(0);
    const [modalInfo, setModalInfo] = useState<boolean>(false);
    const [modalBuscar, setModalBuscar] = useState<boolean>(false);

    const [produtoIndex, setProdutoIndex] = useState<number>(0);

    const handleAumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const handleDiminuirQuantidade = () => {
        if (quantidade > 0) {
            setQuantidade(quantidade - 1);
        }
    };

    const alterarProduto = (indice: number) => {
        setProdutoIndex(indice);
    };

    useEffect(() => {
        async function trazerProdutos() {
            try {
                const response = await HttpRequest.get<Produto[]>('/produtos');

                const dividirObj = response.data.slice(0, 5);

                setProdutos(dividirObj);

                const categoriasExtraidas = [...new Set(dividirObj.map((produto: Produto) => produto.category))];
                setCategorias(categoriasExtraidas);
            } catch (error) {
                console.log(error);
            }
        }
        trazerProdutos();
    }, []);

    const produtoAtual = produtos.length > 0 ? produtos[produtoIndex % produtos.length] : null;

    return (
        <Container>
            <Menu categorias={categorias} quantidadePorCategoria={2} />
            <SectionContainerMain>
                <div className='containerImg'>
                    <img src="https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/2007/2007-1724352589303.jpg" alt="alt" />
                    <div>
                        <button
                            onClick={() => alterarProduto((produtoIndex - 1 + produtos.length) % produtos.length)}
                        >
                            Produto Anterior
                        </button>
                        <button
                            onClick={() => alterarProduto((produtoIndex + 1) % produtos.length)}
                        >
                            Próximo Produto
                        </button>
                    </div>
                    <div className='linha-img'></div>
                </div>
                <InfoImagens>
                    <button onClick={() => setModalInfo(!modalInfo)}>
                        <FaExclamation size={18} />
                    </button>
                    <button onClick={() => setModalBuscar(!modalBuscar)}>
                        <FaMagnifyingGlass size={18} />
                    </button>
                    <div className='containerMiniaturas'>
                        <div className='imagesMiniaturas'>
                            <img src="https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/2007/2007-1724352589303.jpg" alt="alt" />
                        </div>
                        <div className='imagesMiniaturas'>
                            <img src="https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/2007/2007-1724352589303.jpg" alt="alt" />
                        </div>
                        <div className='imagesMiniaturas'>
                            <img src="https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/2007/2007-1724352589303.jpg" alt="alt" />
                        </div>
                    </div>
                    <button>
                        <FaShoppingCart size={18} />
                    </button>
                </InfoImagens>
                <InfoQuantidade>
                    <button onClick={() => SetTrocarDiv(!trocarDiv)}>
                        <TbArrowsUpDown size={18} color='white' />
                    </button>
                    <p>{produtoAtual ? produtoAtual.category : 'Categoria'}</p>
                    <p>Ref {produtoAtual ? produtoAtual.reference : 'Referencia'}</p>
                    <p>R$ {produtoAtual ? produtoAtual.price.toFixed(2).replace('.', ',') : '0,00'}</p>
                </InfoQuantidade>
                {trocarDiv === false ? (
                    <>
                        <ContadorValores diminuirQuantidade={() => handleDiminuirQuantidade()} aumentarQuantidade={() => handleAumentarQuantidade()} quantidade={quantidade} precoAtual={1} acumulado={1} />
                        <SizeProducts tamanhoG={3} tamanhoGG={6} tamanhoM={4} tamanhoP={4} />
                    </>
                ) : (
                    <>
                        <SizeProducts tamanhoG={3} tamanhoGG={6} tamanhoM={4} tamanhoP={4} />
                        <ContadorValores diminuirQuantidade={() => handleDiminuirQuantidade()} aumentarQuantidade={() => handleAumentarQuantidade()} quantidade={quantidade} precoAtual={1} acumulado={1} />

                    </>
                )}

            </SectionContainerMain>

            {modalInfo && (
                <ModalsContainer>
                    <div className='main-modal'>
                        <div className='title-main'>
                            <h3>Informações</h3>
                            <button onClick={() => setModalInfo(!modalInfo)}><IoCloseSharp size={20} /></button>
                        </div>
                        <div className='InfoModal'>
                            <div>
                                <h3>Cores</h3>
                            </div>
                            <div>
                                <p>Nome do produto: { }</p>
                                <p>Referencia: { }</p>
                                <p>Marca: { }</p>
                                <p>Categoria: { }</p>
                                <p>Genero: { }</p>
                            </div>
                        </div>
                    </div>
                </ModalsContainer>
            )}
            {modalBuscar && (
                <ModalsContainer>
                    <div className='main-modal'>
                        <div className='title-main'>
                            <h3>Buscar por REF</h3>
                            <button onClick={() => setModalBuscar(!modalBuscar)}><IoCloseSharp size={20} /></button>
                        </div>
                        <div className='search-pesquisa'>
                            <input type="text" />
                            <button>Buscar</button>
                        </div>

                    </div>
                </ModalsContainer>
            )}
        </Container >
    );
};
export default Home;