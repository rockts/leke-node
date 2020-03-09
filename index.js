const jwt = require("jsonwebtoken");

const payload = {
  name: "gaopeng",
  admin: true
};

const secret = "I_LOVE_LEKE";

const token = jwt.sign(payload, secret);
console.log(token);

jwt.verify(token, secret, (error, decoded) => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(decoded);
});
