import { Request, Response } from "express";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository();

export class ProdutoController{
    create(request: Request, response: Response) {

        const produtos = produtoRepository.create(request.body);

        response.
            status(201).
            json({ message: "Produto cadastrado", data : produtos});
    }

    list(){

    }

    update(){

    }

    delete(){

    }
}