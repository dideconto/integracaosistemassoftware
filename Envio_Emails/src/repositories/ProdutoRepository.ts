import { Produto } from "../models/Produto";

const produtos: Produto[] = [];

export class ProdutoRepository {
  cadastrar(produto: Produto): Produto[] {
    produtos.push(produto);
    return produtos;
  }

  listar(): Produto[] {
    return produtos;
  }
}
