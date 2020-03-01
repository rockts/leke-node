import express, { request } from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.send("hello ~");
});

app.listen(3000, () => {
  console.log("Listen port: 3000");
});
