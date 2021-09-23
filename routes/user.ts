import { Request, Response, Router } from 'express';
import db from '../db.json';

const routes = Router();

routes.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { users } = db;

  const user = users.find((item) => item.id === Number(id));

  if (user) {
    const newUserData = (({ password, ...rest }) => rest)(user);

    res.jsonp(newUserData);
  } else {
    res.status(500).jsonp({
      error: `User (${id}) not found.`,
    });
  }
});

export default routes;
