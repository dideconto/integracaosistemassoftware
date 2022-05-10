import { Request, Response } from "express";
import { FolhaRepository } from "../repositories/folha-repository.";

const folhaRepository = new FolhaRepository();

export class FolhaPagamentoController {
  listar(request: Request, response: Response) {}

  consultar(request: Request, response: Response) {}
}
