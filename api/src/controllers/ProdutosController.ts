import { Request, Response } from 'express';
import Produtos from '../model/Produtos';

class ProdutosController {
    private Produtos: Produtos;

    constructor() {
        this.Produtos = new Produtos();
        this.listarTodosProdutos = this.listarTodosProdutos.bind(this);
        this.listarApenasUmComTodasInformacoes = this.listarApenasUmComTodasInformacoes.bind(this);
        this.listarApenasPorCategoria = this.listarApenasPorCategoria.bind(this);
    }

    async listarTodosProdutos(req: Request, res: Response): Promise<void> {
        const produtos = await this.Produtos.trazerAllProdutos();

        console.log(produtos);

        res.json(produtos);
    }

    async listarApenasUmComTodasInformacoes(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ error: 'ID do produto não fornecido' });
            return;
        }

        const convertStringParaNumero: number = Number(id);

        const produtos: Array<string> = await this.Produtos.trazerUmProduto(convertStringParaNumero);

        res.json(produtos);
    }

    async listarApenasPorCategoria(req: Request, res: Response) {
        const { categoria } = req.params;

        const buscarTodosProdutosPorCategoria = await this.Produtos.buscarPorCategoria(categoria);

        if (!buscarTodosProdutosPorCategoria || buscarTodosProdutosPorCategoria.length === 0) {
            return res.status(404).json({ error: 'Categoria não encontrada ou sem produtos' });
        }

        res.json(buscarTodosProdutosPorCategoria);
    }
}

export default new ProdutosController();
