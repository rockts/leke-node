const express = require("express");
const router = express.Router();

router.route("/events").get((request, response) => {
  response.send({
    message: "hello events ~"
  });
});

module.exports = router;
