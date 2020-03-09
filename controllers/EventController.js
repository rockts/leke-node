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

const show = (request, response) => {
  const id = request.params.id;

  Event.findById(id).then(document => response.send(document));
};

const update = (request, response) => {
  const id = request.params.id;
  const body = {
    title: request.body.title
  };

  Event.findByIdAndUpdate(id, { $set: body }, { new: true }).then(document =>
    response.send(document)
  );
};

const destroy = (request, response) => {
  const id = request.params.id;

  Event.findByIdAndRemove(id).then(document => response.send(document));
};

module.exports = {
  index,
  store,
  show,
  update,
  destroy
};
