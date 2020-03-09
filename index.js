const express = require("express");
const app = express();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/profile", upload.single("avatar"), (request, response, next) => {
  response.send(request.file);
});

app.listen(8080, () => {
  console.log("localhost:8080");
});
