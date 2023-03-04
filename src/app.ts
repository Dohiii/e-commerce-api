import express, { Application, Request, Response } from "express";
// import { connect } from "./db";
import postRouter from "./posts/posts.routes";

const app: Application = express();

app.use(express.json());

// // Connect to MongoDB
// connect();

// Routes
app.use("/posts", postRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

export default app;
