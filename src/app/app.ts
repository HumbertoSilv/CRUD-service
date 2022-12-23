
// import { Handler, Context } from 'aws-lambda';
// import dotenv from 'dotenv';
// import path from 'path';
// const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
// dotenv.config({
//   path: dotenvPath,
// });

// import { books } from './model';
// import { BooksController } from './controller/books';
// const booksController = new BooksController(books);

// export const create: Handler = (event: any, context: Context) => {
//   return booksController.create(event, context);
// };

// export const update: Handler = (event: any) => booksController.update(event);

// export const find: Handler = () => booksController.find();

// export const findOne: Handler = (event: any, context: Context) => {
//   return booksController.findOne(event, context);
// };

// export const deleteOne: Handler = (event: any) => booksController.deleteOne(event);

import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { BooksService } from "./service/books";

const app = express();

app.post("/book", async (req: Request, res: Response, next: NextFunction) => {
  const booksController = new BooksService();

  console.log(req);
  
  
  const book = await booksController.createBook(req.body);
  return res.status(200).json({
    book
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found my brother",
  });
});

export { app };
