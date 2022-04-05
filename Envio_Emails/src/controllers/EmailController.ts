import { Response, Request } from "express";
import { ClienteRepository } from "../repositories/ClienteRepository";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

const produtoRepository = new ProdutoRepository();
const clienteRepository = new ClienteRepository();

export class EmailController{
    enviar(request: Request, reponse: Response){
        let corpo = "";
        produtoRepository.listar().forEach(produto => {
            corpo += `\n ${produto.nome}`;
        });

        clienteRepository.listar().forEach(cliente => {
            let email = 
                `\n -- NOVO E-MAIL -- \n` +
                `\nPara: ${cliente.email}` + 
                `\nAssunto: Novo produto` +
                `\nCorpo: ${corpo}`
            console.log(email);
        });
        reponse.status(200).json({message: "E-mails enviados"});
    }
}