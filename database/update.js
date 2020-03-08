const Event = require("../models/event");

let id = "5e6511d5d07c2b698a5f25d1";
let body = {
  title: "Google I/O 大会"
};

Event.findByIdAndUpdate(id, { $set: body }, { new: true }).then(document =>
  console.log(document)
);
