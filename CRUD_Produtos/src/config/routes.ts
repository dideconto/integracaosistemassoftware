import { Router } from 'express';
import { ProdutoController } from '../controllers/ProdutoController';

const routes = Router();

//Default
routes.get("/", (request, response) => {
    response.json({ message : "Hello World com Express"});
});

//Produto
routes.post("/produto/criar", new ProdutoController().create);
routes.get("/produto/listar", new ProdutoController().list);
routes.put("/produto/alterar", new ProdutoController().update);
routes.delete("/produto/deletar/:nome", new ProdutoController().delete);

export { routes };