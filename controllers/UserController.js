const User = require("../models/user");
const bcrypt = require("bcrypt");

const store = (request, response) => {
  const userName = request.body.userName;

  bcrypt.hash(request.body.password, 10).then(password => {
    const user = new User({
      userName,
      password
    });

    user
      .save()
      .then(() => response.send({ message: "注册成功" }))
      .catch(error => response.send(error));
  });
};

module.exports = {
  store
};
