import { Response, Request } from "express";

export class EmailController{
    enviar(request: Request, reponse: Response){
        console.log("Aqui enviaremos todos os emails");
        reponse.status(200).json({message: "E-mails enviados"});
    }
}