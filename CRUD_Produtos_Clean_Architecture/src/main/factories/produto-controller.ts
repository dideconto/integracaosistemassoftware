import { CadastrarProdutoService } from "../../data/services/cadastrar-produtos";
import { ProdutoRepository } from "../../infra/repositories/produto-repository";
import { ProdutoController } from "../../presentation/controllers/produto-controller";

export const criarProdutoController = () : ProdutoController => {
    const repository = new ProdutoRepository();
    const service = new CadastrarProdutoService(repository);
    return new ProdutoController(service);
} 