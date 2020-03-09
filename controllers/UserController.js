const User = require("../models/user");

const store = (request, response) => {
  const userName = request.body.userName;
  const password = request.body.password;

  const user = new User({
    userName,
    password
  });

  user
    .save()
    .then(() => response.send({ message: "注册成功" }))
    .catch(error => response.send(error));
};

module.exports = {
  store
};
