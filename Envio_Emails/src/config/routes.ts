import { Router } from "express";
import { EmailController } from "../controllers/EmailController";
import { ProdutoController } from "../controllers/ProdutoController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "Envio de e-mail" });
});

//Produto
routes.post("/produto/cadastrar", new ProdutoController().cadastrar);

//E-mail
routes.get("/email/enviar", new EmailController().enviar);

export { routes };
