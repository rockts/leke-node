const Event = require("../models/event");

Event.findByIdAndRemove("5e6511d5d07c2b698a5f25d1").then(document =>
  console.log(document)
);
