const jwt = require("jsonwebtoken");

const payload = {
  name: "gaopeng",
  admin: true
};

const secret = "I_LOVE_LEKE";

const token = jwt.sign(payload, secret);
console.log(token);
