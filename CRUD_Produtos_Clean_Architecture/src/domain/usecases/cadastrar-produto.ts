import { Produto } from "../entities/produto";

export interface CadastrarProduto{
    cadastrar: (produto: Produto) => Promise<Produto[]>;
}