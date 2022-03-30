import axios from "axios";
import { Request, Response } from "express";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository();

export class ProdutoController {
  cadastrar(request: Request, response: Response) {
    const produto = request.body;
    const produtos = produtoRepository.cadastrar(produto);

    //fetch ou axios
    axios
      .post("http://localhost:3334/produto/cadastrar", produto)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    response.status(201).json({ message: "Produto cadastrado", data: produtos });
  }

  listar(request: Request, response: Response) {
    const produtos = produtoRepository.listar();
    response.status(200).json({ message: "Listagem de produtos", data: produtos });
  }

  alterar(request: Request, response: Response) {
    const produtos = produtoRepository.alterar(request.body);
    response.status(200).json({ message: "Produto alterado", data: produtos });
  }

  deletar(request: Request, response: Response) {
    const id = Number.parseInt(request.params.id);
    const produtos = produtoRepository.remover(id);
    response.status(200).json({ message: "Produto removido", data: produtos });
  }
}
