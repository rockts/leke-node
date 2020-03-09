const Event = require("../models/event");

const index = (request, response) => {
  Event.find().then(documents => response.send(documents));
};

const store = (request, response) => {
  // console.log(request.body);

  const event = new Event({
    title: request.body.title
  });

  event.save().then(document => response.send(document));
};

module.exports = {
  index,
  store
};
