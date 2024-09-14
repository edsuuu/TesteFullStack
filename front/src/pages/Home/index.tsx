/* eslint-disable prefer-const */
import React, { useEffect, useState } from 'react';

import Menu from '../../components/Menu';
import SizeProducts from '../../components/SizeProducts';
import ContadorValores from '../../components/ContadorValores';
import { HttpRequest } from '../../services/HttpRequest';
import { Produto } from './interfaces';
import { Container } from './styled';
import InformacoesModal from '../../components/InformacoesModal';
import SearchModal from '../../components/SearchModal';
import DescricaoComponent from '../../components/DescricaoComponent';
import InfoEImagesDoProduto from '../../components/InfoEImagesDoProduto';
import ImagemPrincipal from '../../components/ImagemPrincipal';

const Home: React.FC = () => {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    const [categorias, setCategorias] = useState<string[]>([]);
    const [qntPorCategoria, setQntPorCategoria] = useState<{ category: string, count: number }[]>([]);
    const [trocarDiv, SetTrocarDiv] = useState<boolean>(false);
    const [quantidade, setQuantidade] = useState<number>(0);
    const [modalInfo, setModalInfo] = useState<boolean>(false);
    const [modalBuscar, setModalBuscar] = useState<boolean>(false);

    const [produtoIndex, setProdutoIndex] = useState<number>(0);
    const [refBusca, setRefBusca] = useState<string>('');
    const [packAtual, setPackAtual] = useState<number>(0);

    const [quantidadePorTamanho, setQuantidadePorTamanho] = useState({
        P: 0,
        M: 0,
        G: 0,
        GG: 0
    });

    const handleAumentarQuantidade = () => {
        setQuantidade(prevQuantidade => prevQuantidade + 1);
        const produtoAtual = produtos[produtoIndex];

        if (produtoAtual) {
            const quantidadeAtualizada = quantidade + 1;
            setQuantidade(quantidadeAtualizada);
            localStorage.setItem(`quantidade_produto_${produtoAtual.id}`, quantidadeAtualizada.toString());
        }
    };

    const handleDiminuirQuantidade = () => {
        const produtoAtual = produtos[produtoIndex];

        if (produtoAtual) {
            let quantidadeArmazenada = localStorage.getItem(`quantidade_produto_${produtoAtual.id}`);
            let quantidadeAtual = quantidadeArmazenada ? parseInt(quantidadeArmazenada, 10) : 0;

            if (quantidadeAtual > 0) {
                quantidadeAtual--;
            }
            setQuantidade(quantidadeAtual);

            localStorage.setItem(`quantidade_produto_${produtoAtual.id}`, quantidadeAtual.toString());
        }
    };

    const alterarProduto = (indice: number) => {
        setProdutoIndex(indice);

        const produtoSelecionado = produtos[indice];

        if (produtoSelecionado && produtoSelecionado.skus) {
            const quantidadePorTamanhoTemp = produtoSelecionado.skus.reduce((acumulador, sku) => {
                switch (sku.size) {
                case 'P':
                    acumulador.P += sku.min_quantity;
                    break;
                case 'M':
                    acumulador.M += sku.min_quantity;
                    break;
                case 'G':
                    acumulador.G += sku.min_quantity;
                    break;
                case 'GG':
                    acumulador.GG += sku.min_quantity;
                    break;
                }
                return acumulador;
            }, { P: 0, M: 0, G: 0, GG: 0 });

            setQuantidadePorTamanho(quantidadePorTamanhoTemp);

            const quantidadeArmazenada = localStorage.getItem(`quantidade_produto_${produtoSelecionado.id}`);
            setQuantidade(quantidadeArmazenada ? parseInt(quantidadeArmazenada, 10) : 0);

            if (!quantidadeArmazenada) {
                localStorage.setItem(`quantidade_produto_${produtoSelecionado.id}`, '0');
            }

        } else {
            setQuantidade(0);
        }
    };

    const buscarProdutoPorRef = () => {
        const indiceEncontrado = produtos.findIndex(produto => produto.reference === refBusca);

        if (indiceEncontrado !== -1) {
            alterarProduto(indiceEncontrado);
            setModalBuscar(false);
            setRefBusca('');
        } else {
            alert('Referencia Não encontrada ');
        }
    };

    const handleModalSearch = () => {
        setModalBuscar(!modalBuscar);
    };
    const handleModalInfo = () => {
        setModalInfo(!modalInfo);
    };

    const handleTrocarDiv = () => {
        SetTrocarDiv(!trocarDiv);
    };

    useEffect(() => {
        const total = Object.values(quantidadePorTamanho).reduce((acumulador, valor) => acumulador + valor, 0);
        setPackAtual(total);

    }, [quantidadePorTamanho]);

    useEffect(() => {
        async function trazerProdutos() {
            try {
                const response = await HttpRequest.get<Produto[]>('/produtos');

                const dividirObj = response.data.slice(0, 7);

                setProdutos(dividirObj);

                const categoriasExtraidas = [...new Set(dividirObj.map((produto: Produto) => produto.category))];

                const contagemCategoriasArray = dividirObj.reduce((acumulador: { category: string, count: number }[], produto) => {
                    if (produto.category) {
                        const categoriaExistente = acumulador.find(item => item.category === produto.category);
                        if (categoriaExistente) {
                            categoriaExistente.count += 1;
                        } else {
                            acumulador.push({ category: produto.category, count: 1 });
                        }
                    }
                    return acumulador;
                }, []);

                setCategorias(categoriasExtraidas);

                setQntPorCategoria(contagemCategoriasArray);

            } catch (error) {
                console.log(error);
            }
        }

        trazerProdutos();

    }, []);

    const produtoAtual = produtos.length > 0 ? produtos[produtoIndex % produtos.length] : null;

    const totalAcumulado = packAtual * (produtoAtual?.price || 0);

    const precoAtual = totalAcumulado * quantidade;

    return (
        <Container>

            <Menu
                categorias={categorias}
                quantidadePorCategoria={qntPorCategoria}
            />

            <div>
                <ImagemPrincipal
                    produtoAtual={produtoAtual}
                    alterarAntesProduto={() => alterarProduto((produtoIndex - 1 + produtos.length) % produtos.length)}
                    alterarProxProduto={() => alterarProduto((produtoIndex + 1) % produtos.length)}
                />

                <InfoEImagesDoProduto
                    setModalInfo={handleModalInfo}
                    setModalBuscar={handleModalSearch}
                    produtoAtual={produtoAtual}

                />

                <DescricaoComponent
                    setTrocarDiv={handleTrocarDiv}
                    categoria={produtoAtual?.category}
                    referencia={produtoAtual?.reference}
                    preco={produtoAtual?.price}
                />

                {trocarDiv === false ? (
                    <>
                        <ContadorValores
                            diminuirQuantidade={handleDiminuirQuantidade}
                            aumentarQuantidade={handleAumentarQuantidade}
                            quantidade={quantidade} precoAtual={precoAtual}
                            acumulado={totalAcumulado}
                        />

                        <SizeProducts tamanhoG={quantidadePorTamanho.G}
                            tamanhoGG={quantidadePorTamanho.GG}
                            tamanhoM={quantidadePorTamanho.M}
                            tamanhoP={quantidadePorTamanho.P}
                        />
                    </>
                ) : (
                    <>
                        <SizeProducts
                            tamanhoG={quantidadePorTamanho.G}
                            tamanhoGG={quantidadePorTamanho.GG}
                            tamanhoM={quantidadePorTamanho.M}
                            tamanhoP={quantidadePorTamanho.P}
                        />

                        <ContadorValores
                            diminuirQuantidade={handleDiminuirQuantidade}
                            aumentarQuantidade={handleAumentarQuantidade}
                            quantidade={quantidade}
                            precoAtual={precoAtual}
                            acumulado={totalAcumulado}
                        />
                    </>
                )}

            </div>

            {modalInfo && (
                <InformacoesModal
                    handleModalInfo={handleModalInfo}
                    nomeDoProduto={produtoAtual && produtoAtual.name}
                    referenciaDoProduto={produtoAtual && produtoAtual.reference}
                    marcaDoProduto={produtoAtual && produtoAtual.brand}
                    categoriaDoProduto={produtoAtual && produtoAtual.category}
                    generoDoProduto={produtoAtual && produtoAtual.gender}
                />
            )}

            {modalBuscar && (
                <SearchModal setModalBuscar={handleModalSearch} buscarProdutoPorRef={buscarProdutoPorRef} refBusca={refBusca} setRefBusca={setRefBusca} />
            )}

        </Container >
    );
};
export default Home;