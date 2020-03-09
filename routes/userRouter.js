const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const authenticate = require("../middlewares/authenticate");

router.route("/users").post(UserController.store);

router.post("/auth", UserController.auth);

router.get("/me", authenticate, UserController.me);

module.exports = router;
