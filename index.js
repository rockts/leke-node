import express, { request } from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("hello ~");
});

app.listen(3000, () => {
  console.log("Listen port: 3000");
});
