import { Request, Response } from 'express';
import Produtos from '../model/Produtos';

class ProdutosController {
    constructor() {}

    async listarTodosProdutos(req: Request, res: Response): Promise<void> {
        const produtosInstance = new Produtos();

        const produtos = await produtosInstance.trazerAllProdutos();

        console.log(produtos);

        res.json(produtos);
    }

    async listarApenasUmComTodasInformacoes(req: Request, res: Response): Promise<void> {
        const produtosInstance = new Produtos();

        const { id } = req.params;

        if (!id) {
            res.status(400).json({ error: 'ID do produto não fornecido' });
            return;
        }

        const convertStringParaNumero: number = Number(id);

        const produtos: Array<string> = await produtosInstance.trazerUmProduto(convertStringParaNumero);

        res.json(produtos);
    }

    async listarApenasPorCategoria(req: Request, res: Response) {
        const produtosInstance = new Produtos();

        const { categoria } = req.params;

        const buscarTodosProdutosPorCategoria = await produtosInstance.buscarPorCategoria(categoria);

        if (!buscarTodosProdutosPorCategoria || buscarTodosProdutosPorCategoria.length === 0) {
            return res.status(404).json({ error: 'Categoria não encontrada ou sem produtos' });
        }

        res.json(buscarTodosProdutosPorCategoria);
    }
}

export default new ProdutosController();
