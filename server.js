import "dotenv/config";

import express from "express";
const app = express();
app.use(express.json()); //middleware

import cors from "cors";
app.use(cors());

import helmet from "helmet";
import { DbConfig } from "./src/config/DbConfig.js";
import AdminRouter from "./src/routers/AdminRouter.js";
app.use(helmet());

const PORT = process.env.PORT || 8000;
DbConfig();

app.use("/api/v1/admin-user", AdminRouter);

app.get("/", (req, res) => {
  res.json({
    message: "hi there, welcome to the api",
  });
});

app.use("/", (req, res, next) => {
  res.json({
    status: "404",
    message: "404 not found",
  });
});

// error handling middleware
app.use((error, req, res, next) => {
  console.log(error);
  const statusCode = error.statusCode || 404;
  res.status(statusCode).json({
    status: "error",
    message: "something went wrong",
  });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`server is running on port ${PORT}`);
});
