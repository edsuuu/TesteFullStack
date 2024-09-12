import { Router } from 'express';
import ProdutosController from '../controllers/ProdutosController';
import RotaAutenticada from '../middlewares/RotaAutenticada';

const produtosRoute: Router = Router();

produtosRoute.get('/', RotaAutenticada, ProdutosController.listarTodosProdutos);

produtosRoute.get('/:id', RotaAutenticada, ProdutosController.listarApenasUmComTodasInformacoes);

produtosRoute.get('/categoria/:categoria', RotaAutenticada, ProdutosController.listarApenasPorCategoria);

export { produtosRoute };
