import { Request, Response, Router } from 'express';
import jwt from 'jwt-simple';
import db from '../db.json';

const routes = Router();

routes.post("/token", (req: Request, res: Response) => {
  const { username, password } = req.body;
  const { users } = db;

  const user = users.find(
    (item) => item.username === username && item.password === password
  );

  if (user) {
    const token = jwt.encode(
      (({ password, ...rest }) => rest)(user),
      String(process.env.SECRET_KEY)
    );

    res.jsonp({ token });
  } else {
    res.status(500).jsonp({
      error: "Usuário/Senha inválida!",
    });
  }
});

export default routes;
