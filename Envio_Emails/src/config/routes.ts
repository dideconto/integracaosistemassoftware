import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController";

const routes = Router();

//Default
routes.get("/", (request, response) => {
  response.json({ message: "Envio de e-mail" });
});

export { routes };
