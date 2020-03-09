const jwt = require("jsonwebtoken");
const fs = require("fs");

const payload = {
  name: "gaopeng",
  admin: true
};

/**
 * HS256
 */

// const secret = "I_LOVE_LEKE";

// const token = jwt.sign(payload, secret);
// console.log(token);

// jwt.verify(token, secret, (error, decoded) => {
//   if (error) {
//     console.log(error.message);
//     return;
//   }

//   console.log(decoded);
// });

/**
 * RS256
 */

const privateKey = fs.readFileSync("./config/private.key");
const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });
console.log(token);

const publicKey = fs.readFileSync("./config/public.key");
jwt.verify(token, publicKey, (error, decoded) => {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log(decoded);
});
