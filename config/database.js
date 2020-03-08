const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/ravent";
const options = {
  useMongoClient: true
};

mongoose.Promise = global.Promise;
mongoose
  .connect(uri, options)
  .then(db => console.log("😄 连接数据库成功 ~"))
  .catch(error => console.log("😢 连接数据库失败！"));

module.exports = mongoose;
