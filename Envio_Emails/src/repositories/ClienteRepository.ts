import { Cliente } from "../models/Cliente";

const clientes: Cliente[] = [
  {
    id: 1,
    nome: "Fulano de Tal",
    email: "fulano@gmail.com",
  },
  {
    id: 2,
    nome: "Ciclano de Tal",
    email: "ciclano@gmail.com",
  },
  {
    id: 3,
    nome: "Beltrano de Tal",
    email: "beltrano@gmail.com",
  },
];

export class ClienteRepository {
  listar(): Cliente[] {
    return clientes;
  }
}
