import { Request, Response, Router } from 'express';
import jwt from 'jwt-simple';
import db from '../db.json';

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const { users } = db;

  try {
    const token = String(authorization).replace("Bearer ", "");
    const decoded = jwt.decode(token, String(process.env.SECRET_KEY));

    const user = users.find((item) => item.id === Number(decoded.id));

    if (user) {
      const newUserData = (({ password, ...rest }) => rest)(user);

      res.jsonp(newUserData);
    } else {
      res.status(500).jsonp({
        error: `User (${decoded.id}) not found.`,
      });
    }
  } catch (error) {
    res.status(500).jsonp({
      error: "Invalid token",
    });
  }
});

export default routes;
