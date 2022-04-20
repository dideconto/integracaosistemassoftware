import { Request, Response } from "express";
import { ProdutoModel } from "../../data/models/produto";
import { CadastrarProduto } from "../../domain/usecases/cadastrar-produto";

export class ProdutoController{
    constructor(private readonly cadastrarProduto: CadastrarProduto) {}

    async cadastrar(request: Request, response: Response) {
        const produto: ProdutoModel = request.body;        ;
        return response.json(await this.cadastrarProduto.cadastrar(produto));
    }
}