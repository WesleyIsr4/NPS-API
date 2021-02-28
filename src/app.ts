import 'reflect-metadata';
import express from 'express';
import createConnection from './database';
import { router } from './routes';

createConnection();
const app = express();

/** Metodos para API
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH = Alteração especifica
 **/

app.use(express.json());
app.use(router);

export { app };
