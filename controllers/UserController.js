const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

const auth = (request, response) => {
  User.findOne({ userName: request.body.userName })
    .then(user => {
      if (!user) {
        return Promise.reject({ message: "没找到用户" });
      }

      bcrypt.compare(request.body.password, user.password).then(result => {
        if (result) {
          const payload = {
            userName: user.userName
          };
          const secret = "I_LOVE_LEKE";
          const token = jwt.sign(payload, secret);

          response.send({ token });
        } else {
          response.status(401).send({ message: "未通过身份验证" });
        }
      });
    })
    .catch(error => response.status(400).send(error));
};

const me = (request, response) => {
  response.send(`hello ~ ${request.decoded.userName}`);
};

module.exports = {
  store,
  auth,
  me
};
