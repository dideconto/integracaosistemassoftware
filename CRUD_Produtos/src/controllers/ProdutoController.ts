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

    list(request: Request, response: Response){
        const produtos = produtoRepository.list();
        response.
            status(200).
            json({ message: "Listagem de produtos", data : produtos});
    }

    update(request: Request, response: Response){
        const produtos = produtoRepository.update(request.body);
        response.
            status(200).
            json({ message: "Produto alterado", data : produtos});
    }

    delete(request: Request, response: Response){
        const nome = request.params.nome;
        const produtos = produtoRepository.remove(nome);        
        response.
            status(200).
            json({ message: "Produto removido", data : produtos});
    }
}