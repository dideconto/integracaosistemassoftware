import { ProdutoModel } from "../models/produto";

export interface CadastrarProdutoRepository{
    cadastrar:(produto: ProdutoModel) => 
        Promise<ProdutoModel[]>;
}