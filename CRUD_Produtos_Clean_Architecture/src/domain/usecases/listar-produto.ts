import { Produto } from "../entities/produto";

export interface ListarProduto{
    listar: () => Promise<Produto[]>;
}