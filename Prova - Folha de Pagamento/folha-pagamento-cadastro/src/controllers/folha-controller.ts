import axios from "axios";
import { Request, Response } from "express";
import { FolhaPagamento } from "../models/folha-pagamento";
import { FolhaRepository } from "../repositories/folha-repository.";

const folhaRepository = new FolhaRepository();

export class FolhaPagamentoController {
  cadastrar(request: Request, response: Response) {
    const folha: FolhaPagamento = request.body;
    const folhas = folhaRepository.cadastrar(folha);
    return response.status(201).json(folhas);
  }

  calcular(request: Request, response: Response) {
    let folhas: FolhaPagamento[] = folhaRepository.listar();

    //Processar as folhas e enviar para a aplicação B
    folhas.map((folha) => {
      folha.bruto = this.calcularSalarioBruto(100,50),
      folha.irrf = 2;
      folha.inss = 3;
      folha.fgts = 4;
      folha.liquido = 5;
    });

    axios
      .post("http://localhost:3334/folha/cadastrar", folhas)
      .then((res) => {
        return response.status(200).json(folhas);
      })
      .catch((err) => {
        return response.status(500).json(err);
      });
  }

  calcularSalarioBruto(horas: number, valor: number): number {
    console.log("TEste");
    return horas * valor;
  }
 
  calcularIRRF(bruto: number): number {
    if (bruto <= 1903.98) {
      return 0;
    } else if (bruto <= 2826.65) {
      return bruto * 0.075 - 142.8;
    } else if (bruto <= 3751.05) {
      return bruto * 0.15 - 354.8;
    } else if (bruto <= 4664.68) {
      return bruto * 0.225 - 636.13;
    }
    return bruto * 0.275 - 869.39;
  }
 
  calcularINSS(bruto: number): number {
    if (bruto <= 1693.72) {
      return bruto * 0.08;
    } else if (bruto <= 2822.9) {
      return bruto * 0.09;
    } else if (bruto <= 5645.8) {
      return bruto * 0.11;
    }
    return 621.03;
  }
 
  calcularFGTS(bruto: number): number {
    return bruto * 0.08;
  }
 
  calcularSalarioLiquido(bruto: number, irrf: number, inss: number): number {
    return bruto - irrf - inss;
  }

}
