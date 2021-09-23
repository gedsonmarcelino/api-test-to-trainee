import {
  NextFunction,
  Request,
  Response,
  Router
  } from 'express';
import jwt from 'jwt-simple';

const router = Router();

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  try {
    const token = String(authorization).replace("Bearer ", "");
    const decoded = jwt.decode(token, String(process.env.SECRET_KEY));
    next();
  } catch (error) {
    res.status(500).jsonp({
      error: "Invalid token",
    });
  }
};
