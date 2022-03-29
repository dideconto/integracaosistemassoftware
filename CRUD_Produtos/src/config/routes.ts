import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "API de Produtos" });
});

//Produto
routes.post("/produto/cadastrar", new ProdutoController().cadastrar);
routes.get("/produto/listar", new ProdutoController().listar);
routes.put("/produto/alterar", new ProdutoController().alterar);
routes.delete("/produto/deletar/:id", new ProdutoController().deletar);

export { routes };
