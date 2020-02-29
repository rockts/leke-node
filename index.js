const fs = require("fs");

var fileReadStream = fs.createReadStream("data.json");
var fileWriteStream = fs.createWriteStream("data-1.json");

var count = 0;

// fileReadStream.once("data", chunk => {
//   console.log(chunk.toString());
// });

fileReadStream.on("data", chunk => {
  console.log(`${++count} 接收到：${chunk.length}`);
  fileWriteStream.write(chunk);
});

fileReadStream.on("end", () => {
  console.log("---结束---");
});

fileReadStream.on("error", error => {
  console.log(error);
});
