const express = require("express");
const router = express.Router();
const EventController = require("../controllers/EventController");

router.route("/events").get(EventController.index);

module.exports = router;
