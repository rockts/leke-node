const express = require("express");
const app = express();
const multer = require("multer");

const fileFilter = (request, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error("images only :)"), false);
  }
  callback(null, true);
};

const upload = multer({ dest: "uploads/", fileFilter });

app.post("/profile", upload.single("avatar"), (request, response, next) => {
  response.send(request.file);
});

app.post(
  "/photos/upload",
  upload.array("photos", 3),
  (request, response, next) => {
    response.send(request.files);
  }
);

app.use((error, request, response, next) => {
  response.status(500).send({
    message: error.message
  });
});

app.listen(8080, () => {
  console.log("localhost:8080");
});
