import { CadastrarProduto } from "../../domain/usecases/cadastrar-produto";
import { ProdutoRepository } from "../../infra/repositories/produto-repository";
import { ProdutoModel } from "../models/produto";

export class CadastrarProdutoService implements CadastrarProduto{

    constructor(private readonly produtoRepository : ProdutoRepository){}

    async cadastrar(produto: ProdutoModel) : Promise<ProdutoModel[]>{
        if(produto.nome === "Bolacha"){
            throw new Error("Esse produto já existe!");
        } 
        return this.produtoRepository.cadastrar(produto);
    }

}