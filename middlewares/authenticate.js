const jwt = require("jsonwebtoken");

const authenticate = (request, response, next) => {
  const token = request.header("X-Access-Token");

  if (token) {
    jwt.verify(token, "I_LOVE_LEKE", (error, decoded) => {
      if (error) {
        return response.send(error);
      } else {
        request.decoded = decoded;
        next();
      }
    });
  } else {
    return response.status(403).send({ message: "没有权限访问" });
  }
};

module.exports = authenticate;
