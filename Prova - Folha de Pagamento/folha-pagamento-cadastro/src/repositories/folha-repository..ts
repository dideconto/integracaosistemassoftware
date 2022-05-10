import { FolhaPagamento } from "../models/folha-pagamento";
import mock from "./folhas-mock.json";

const folhas: FolhaPagamento[] = mock;

export class FolhaRepository {
  cadastrar(folha: FolhaPagamento) {}

  listar() {}
}
