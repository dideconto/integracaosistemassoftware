import { Request, Response, Router } from "express";
import { CadastrarProdutoService } from "../../data/services/cadastrar-produtos";
import { ProdutoRepository } from "../../infra/repositories/produto-repository";
import { ProdutoController } from "../../presentation/controllers/produto-controller";

const routes = Router();

const repository = new ProdutoRepository();
const service = new CadastrarProdutoService(repository);
const controller = new ProdutoController(service);

//Produto
routes.post("/produto/cadastrar", 
    function(request: Request, response: Response){
        controller.cadastrar(request, response);
    });

export { routes };