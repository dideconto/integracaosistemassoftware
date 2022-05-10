import { Request, Response } from "express";
import { FolhaPagamento } from "../models/folha-pagamento";
import { FolhaRepository } from "../repositories/folha-repository.";

const folhaRepository = new FolhaRepository();

export class FolhaPagamentoController {
  listar(request: Request, response: Response) {
    const folhas = folhaRepository.listar();
    const total = 
      folhas.reduce((total, folha) => total + folha.liquido, 0);
    const dados = {
      array: folhas,
      soma:  total
    };
    return response.status(200).json(dados);
  }

  consultar(request: Request, response: Response) {
    const {cpf, mes, ano} = request.params;
    const folha = folhaRepository.consultar(
      cpf, Number.parseInt(mes), Number.parseInt(ano)
    );
    return response.status(200).json(folha);
  }

  cadastrar(request: Request, response: Response) {
    let folhas: FolhaPagamento[] = request.body;
    folhas = folhaRepository.cadastrar(folhas);
    return response.status(200).json(folhas);
  }
}
