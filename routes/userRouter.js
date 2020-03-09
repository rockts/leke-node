const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.route("/users").post(UserController.store);

module.exports = router;
