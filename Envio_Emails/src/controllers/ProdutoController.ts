import { Request, Response } from "express";
import { ProdutoRepository } from "../repositories/ProdutoRepository";
import { Produto } from "./../models/Produto";

const produtoRepository = new ProdutoRepository();

export class ProdutoController {

    cadastrar(request: Request, response: Response){
        const produto: Produto = request.body;
        const produtos = produtoRepository.cadastrar(produto);
        response.status(201).json({ message: "Produto cadastrado", data: produtos });
    }

}
