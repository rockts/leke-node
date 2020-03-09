const express = require("express");
const app = express();
const multer = require("multer");
const loki = require("lokijs");

const db = new loki("uploads/uploads.json", { persistenceMethod: "fs" });

const loadCollection = (collectionName, db) => {
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const collection =
        db.getCollection(collectionName) || db.addCollection(collectionName);
      resolve(collection);
    });
  });
};

const fileFilter = (request, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error("images only :)"), false);
  }
  callback(null, true);
};

const upload = multer({ dest: "uploads/", fileFilter });

app.post(
  "/profile",
  upload.single("avatar"),
  async (request, response, next) => {
    const collection = await loadCollection("uploads", db);
    const result = collection.insert(request.file);
    db.saveDatabase();
    response.send(result);
  }
);

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
