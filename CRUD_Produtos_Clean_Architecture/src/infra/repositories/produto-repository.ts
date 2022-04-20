import { CadastrarProdutoRepository } from "../../data/contracts/cadastrar-produto-repository";
import { ProdutoModel } from "../../data/models/produto";

const produtos : ProdutoModel[] = [];

export class ProdutoRepository implements
    CadastrarProdutoRepository{

    async cadastrar(produto: ProdutoModel) : Promise<ProdutoModel[]>{
        produtos.push(produto);
        return produtos;
    }
    
}