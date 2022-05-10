import { Router } from "express";
import { FolhaPagamentoController } from "../controllers/folha-controller";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "API de Produtos" });
});

//Folha de Pagamento
routes.get("/folha/consultar/:cpf/:mes/:ano", new FolhaPagamentoController().consultar);
routes.get("/folha/listar", new FolhaPagamentoController().listar);

export { routes };
