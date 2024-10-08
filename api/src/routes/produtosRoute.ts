import { Router } from 'express';
import ProdutosController from '../controllers/ProdutosController';
import ProductsValidator from '../middlewares/ProductsValidator';
// import RotaAutenticada from '../middlewares/RotaAutenticada';

const produtosRoute: Router = Router();

produtosRoute.get('/', ProdutosController.listarTodosProdutos);

produtosRoute.get('/:id', ProductsValidator.validacaoDeIDnoParametro, ProdutosController.listarApenasUmComTodasInformacoes);

produtosRoute.get('/categoria/:categoria', ProdutosController.listarApenasPorCategoria);

export { produtosRoute };
