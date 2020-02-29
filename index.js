const fs = require("fs");

fs.stat("index.js", (error, stats) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stats);
    console.log(`文件：${stats.isFile()}`);
    console.log(`目录：${stats.isDirectory()}`);
  }
});
