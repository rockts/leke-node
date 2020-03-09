const crypto = require("crypto");
const hash = crypto.createHash("sha256");

hash.update("password");
console.log(hash.digest("base64"));
