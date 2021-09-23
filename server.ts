import dotenv from 'dotenv';
import { Request, Response } from 'express';
import * as jsonServer from 'json-server';
import db from './db.json';
import { authMiddleware } from './middlewares/auth';
import authRouter from './routes/auth';
import userRouter from './routes/user';

dotenv.config();

const app = jsonServer.create();
const middlewares = jsonServer.defaults();
const jsonRouter = jsonServer.router(db);

// Set default middlewares (logger, static, cors and no-cache)
app.use(middlewares);
app.use(jsonServer.bodyParser);

// Routes
app.use("/auth", authRouter);
app.use("/user", authMiddleware, userRouter);
app.use(authMiddleware, jsonRouter);

app.listen(process.env.PORT, () =>
  console.log(
    `✅  JSON Server is running in http://localhost:${process.env.PORT}`
  )
);
