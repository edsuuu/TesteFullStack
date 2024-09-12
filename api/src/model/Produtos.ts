/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaService } from '../database/prisma';

class Produtos {
    constructor(private prisma = PrismaService.getInstance()) {}

    async trazerAllProdutos() {
        try {
            const products = await this.prisma.products.findMany({
                include: {
                    images: true,
                },
            });

            return products;
        } catch (error) {
            console.log(error);
        }
    }
    async trazerUmProduto(IdDoProduto: number) {
        try {
            const product = await this.prisma.products.findUnique({
                where: {
                    id: IdDoProduto,
                },
                include: {
                    colors: true,
                    images: true,
                    skus: true,
                },
            });

            const convertBigInt = JSON.parse(JSON.stringify(product, (key, value) => (typeof value === 'bigint' ? value.toString() : value)));

            return convertBigInt;
        } catch (error) {
            console.log(error);
            throw new Error('Erro ao buscar o produto');
        }
    }

    async buscarPorCategoria(categoria: string) {
        try {
            const produtos = this.prisma.products.findMany({
                where: {
                    category: categoria,
                },
            });

            return produtos;
        } catch (error) {
            console.log(error);
            throw new Error('Erro ao buscar produtos por categoria');
        }
    }
}

export default Produtos;
