const index = (request, response) => {
  response.send({
    message: "hello events ~"
  });
};

module.exports = {
  index
};
