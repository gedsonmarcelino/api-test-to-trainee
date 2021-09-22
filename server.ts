import dotenv from 'dotenv';
import { Request, Response } from 'express';
import * as jsonServer from 'json-server';
import db from './db.json';

dotenv.config();

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(db);

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post("/auth/token", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === "teste" && password === "123456") {
    res.jsonp({
      token: process.env.TOKEN_KEY,
    });
  } else {
    res.status(500).jsonp({
      error: "Usuário/Senha inválida!",
    });
  }
});

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use((req: Request, res: Response, next) => {
  const { authorization } = req.headers;
  if (authorization !== `Bearer ${process.env.TOKEN_KEY}`) {
    res.status(500).jsonp({
      error: "Token inválido!",
    });
  } else {
    // Continue to JSON Server router
    next();
  }
});

// Use default router
server.use(router);

server.listen(process.env.PORT, () => {
  console.log(`JSON Server is running in http://localhost:${process.env.PORT}`);
});
