const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("hello ~");
});

app.listen(port, () => console.log(`监听端口：${port}`));
