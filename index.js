const bcrypt = require("bcrypt");

const password = "password";

bcrypt.genSalt(10, (error, salt) => {
  console.log("salt: ", salt);

  bcrypt.hash(password, salt, (error, hash) => {
    console.log("hash: ", hash);
  });
});

const hashPassword =
  "$2b$10$Na3q/RGJIIygTHL.ObhMjeqbKXN44l3z1BCYaoJNwTamcgypaiy7a";

const userInputPassword = "password1";

bcrypt
  .compare(userInputPassword, hashPassword)
  .then(result => console.log(result));
