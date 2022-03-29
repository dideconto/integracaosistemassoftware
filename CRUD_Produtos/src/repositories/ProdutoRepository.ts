import { Produto } from "../models/Produto";

const produtos: Produto[] = [];
let id = 0;

export class ProdutoRepository {
  cadastrar(produto: Produto): Produto[] {
    id++;
    produto.id = id;
    produtos.push(produto);
    return produtos;
  }

  listar(): Produto[] {
    return produtos;
  }

  remover(id: number): Produto[] {
    const index = produtos.findIndex((produto) => produto.id === id);
    produtos.splice(index, 1);
    return produtos;
  }

  alterar(produtoAlterado: Produto): Produto[] {
    const index = produtos.findIndex((produto) => produto.id === produtoAlterado.id);
    produtos[index] = produtoAlterado;
    return produtos;
  }
}
