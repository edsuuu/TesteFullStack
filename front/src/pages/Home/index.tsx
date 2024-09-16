import React, { useContext, useEffect, useState } from 'react';

import Menu from '../../components/Menu';
import SizeProducts from '../../components/SizeProducts';
import ContadorValores from '../../components/ContadorValores';
import { Container } from './styled';
import InformacoesModal from '../../components/InformacoesModal';
import SearchModal from '../../components/SearchModal';
import DescricaoComponent from '../../components/DescricaoComponent';
import InfoEImagesDoProduto from '../../components/InfoEImagesDoProduto';
import ImagemPrincipal from '../../components/ImagemPrincipal';
import { ProdutosContext } from '../../contexts/modules/context';
import { carregarTodosProdutos } from '../../contexts/modules/actions';

const Home: React.FC = () => {

    const ctx = useContext(ProdutosContext);

    const reduzirArrayDeProdutos = ctx?.produtosState.produtos.slice(10, 17) || [];

    if (reduzirArrayDeProdutos === undefined) return null;

    const [categorias, setCategorias] = useState<string>('');
    const [qntPorCategoria, setQntPorCategoria] = useState<{ category: string, count: number }[]>([]);
    const [trocarDiv, SetTrocarDiv] = useState<boolean>(false);
    const [quantidade, setQuantidade] = useState<number>(0);
    const [modalInfo, setModalInfo] = useState<boolean>(false);
    const [modalBuscar, setModalBuscar] = useState<boolean>(false);
    const [produtoIndex, setProdutoIndex] = useState<number>(0);
    const [refBusca, setRefBusca] = useState<string>('');
    const [packAtual, setPackAtual] = useState<number>(0);

    const [imageIndex, setImageIndex] = useState<number>(0);

    const [quantidadePorTamanho, setQuantidadePorTamanho] = useState({
        P: 0,
        M: 0,
        G: 0,
        GG: 0
    });

    const handleAumentarQuantidade = () => {
        setQuantidade(prevQuantidade => {
            const novaQuantidade = prevQuantidade + 1;

            const produtoAtual = reduzirArrayDeProdutos[produtoIndex];

            if (produtoAtual) {
                const produtoArmazenado = localStorage.getItem(`quantidade_produto_${produtoAtual.id}`);
                const dadosProduto = produtoArmazenado ? JSON.parse(produtoArmazenado) : { quantidade: 0, valor: produtoAtual.price };

                dadosProduto.quantidade = novaQuantidade;

                localStorage.setItem(`quantidade_produto_${produtoAtual.id}`, JSON.stringify(dadosProduto));
            }

            return novaQuantidade;
        });
    };

    const handleDiminuirQuantidade = () => {
        setQuantidade(prevQuantidade => {
            const novaQuantidade = prevQuantidade > 0 ? prevQuantidade - 1 : 0;

            const produtoAtual = reduzirArrayDeProdutos[produtoIndex];

            if (produtoAtual) {
                const produtoArmazenado = localStorage.getItem(`quantidade_produto_${produtoAtual.id}`);
                const dadosProduto = produtoArmazenado ? JSON.parse(produtoArmazenado) : { quantidade: 0, valor: produtoAtual.price };

                dadosProduto.quantidade = novaQuantidade;

                localStorage.setItem(`quantidade_produto_${produtoAtual.id}`, JSON.stringify(dadosProduto));
            }

            return novaQuantidade;
        });
    };

    const alterarProduto = (indice: number) => {
        setProdutoIndex(indice);
        setImageIndex(0);
        
        const produtoSelecionado = reduzirArrayDeProdutos[indice];

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

            setCategorias(produtoSelecionado.category);

            setQuantidadePorTamanho(quantidadePorTamanhoTemp);

            const produtoArmazenado = localStorage.getItem(`quantidade_produto_${produtoSelecionado.id}`);

            if (produtoArmazenado) {
                const dadosProduto = JSON.parse(produtoArmazenado);
                setQuantidade(dadosProduto.quantidade ? parseInt(dadosProduto.quantidade, 10) : 0);
            } else {

                const calcDoPack = Object.values(quantidadePorTamanhoTemp).reduce((acumulador, quantidade) => acumulador + quantidade, 0);

                const totalAcumulado = calcDoPack * (produtoSelecionado.price || 0);

                const novoProduto = {
                    quantidade: 0,
                    valor: produtoSelecionado.price,
                    valorDoPack: totalAcumulado
                };

                localStorage.setItem(`quantidade_produto_${produtoSelecionado.id}`, JSON.stringify(novoProduto));
                setQuantidade(0);
            }

        } else {
            setQuantidade(0);
        }
    };

    useEffect(() => {

        const contagemCategoriasArray = reduzirArrayDeProdutos.reduce((acumulador: { category: string, count: number }[], produto) => {
            if (produto.category === categorias) {
                const categoriaExistente = acumulador.find(item => item.category === produto.category);
                if (categoriaExistente) {
                    categoriaExistente.count += 1;
                } else {
                    acumulador.push({ category: produto.category, count: 1 });
                }
            }
            return acumulador;
        }, []);

        setQntPorCategoria(contagemCategoriasArray);
    }, [categorias]);

    const buscarProdutoPorRef = () => {
        const indiceEncontrado = reduzirArrayDeProdutos.findIndex(produto => produto.reference === refBusca);

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
        carregarTodosProdutos(ctx?.setProdutosDispatch);
    }, []);

    useEffect(() => {
        const total = Object.values(quantidadePorTamanho).reduce((acumulador, valor) => acumulador + valor, 0);
        setPackAtual(total);

    }, [quantidadePorTamanho]);

    const produtoAtual = reduzirArrayDeProdutos[produtoIndex];

    const totalAcumulado = packAtual * (produtoAtual?.price || 0);

    const precoAtual = totalAcumulado * quantidade;

    return (
        <Container>

            <Menu
                voltarCategoria={() => console.log(1)}
                trocarCategoria={() => console.log(2)}
                categorias={categorias}
                quantidadePorCategoria={qntPorCategoria}
            />

            <>
                <ImagemPrincipal
                    produtoAtual={reduzirArrayDeProdutos[produtoIndex]}
                    alterarAntesProduto={() => alterarProduto((produtoIndex - 1 + reduzirArrayDeProdutos.length) % reduzirArrayDeProdutos.length)}
                    alterarProxProduto={() => alterarProduto((produtoIndex + 1) % reduzirArrayDeProdutos.length)}
                    imageIndex={imageIndex}
                />

                <InfoEImagesDoProduto
                    setModalInfo={handleModalInfo}
                    setModalBuscar={handleModalSearch}
                    produtoAtual={produtoAtual}
                    handleItemClick={(index) => setImageIndex(index)}

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
                        />
                    </>
                )}

            </>

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