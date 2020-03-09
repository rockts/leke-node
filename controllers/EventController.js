const Event = require("../models/event");

const index = (request, response) => {
  Event.find().then(documents => response.send(documents));
};

module.exports = {
  index
};
