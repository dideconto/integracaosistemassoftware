import express from 'express';
import { routes } from './config/routes';

const app = express(); 

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333...");
});