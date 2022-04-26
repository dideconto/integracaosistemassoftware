import { Request, Response } from "express";
import { ProdutoModel } from "../../data/models/produto";
import { CadastrarProduto } from "../../domain/usecases/cadastrar-produto";

export class ProdutoController {
    constructor(private readonly cadastrarProduto: CadastrarProduto) { }

    async cadastrar(request: Request, response: Response) {
        try {
            const produto: ProdutoModel = request.body;
            return response.status(201).
                json(await this.cadastrarProduto.cadastrar(produto));
        } catch (erro: any) {
            return response.status(400).json({ message: erro.message });
        }
    }
}