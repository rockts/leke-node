const express = require("express");
const router = express.Router();
const EventController = require("../controllers/EventController");

router
  .route("/events")
  .get(EventController.index)
  .post(EventController.store);

router
  .route("/events/:id")
  .get(EventController.show)
  .patch(EventController.update);

module.exports = router;
