import { Request, Response } from "express";
import { FolhaRepository } from "../repositories/folha-repository.";

const folhaRepository = new FolhaRepository();

export class FolhaPagamentoController {
  cadastrar(request: Request, response: Response) {}

  calcular(request: Request, response: Response) {}
}
