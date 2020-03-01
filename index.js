import express, { request } from "express";
import morgan from "morgan";
import path from "path";

const app = express();

app.use(morgan("dev"));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (request, response) => {
  response.render("index");
});

app.listen(3000, () => {
  console.log("Listen port: 3000");
});
