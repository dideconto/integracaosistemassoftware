import { Request, Response, Router } from "express";
import { criarProdutoController } from "../factories/produto-controller";

const routes = Router();

//Produto
routes.post("/produto/cadastrar", 
    async function(request: Request, response: Response){
        const controller = criarProdutoController();        
        await controller.cadastrar(request, response);
    });

export { routes };