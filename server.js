const express = require("express");
const eventRouter = require("./routes/eventRouter");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use("/api", eventRouter);

app.get("/", (request, response) => {
  response.send("hello ~");
});

app.listen(port, () => console.log(`监听端口：${port}`));
