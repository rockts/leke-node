// const https = require("https");

class LekeDemo {
  send(data) {
    this.logMessage(data);
  }

  logMessage(message) {
    console.log(message);
  }

  // engine(fuel) {
  //   if (!(fuel === "gas")) {
  //     throw new Error("not accept");
  //   }
  // }
  // fetchData(api, callback) {
  //   var requestUrl = `https://api.douban.com/v2/movie/${api}?&apikey=0b2bdeda43b5688921839c8ecb20399b`;
  //   https.get(requestUrl, response => {
  //     var responseData = "";
  //     response.setEncoding("utf8");
  //     response.on("data", chunk => {
  //       responseData += chunk;
  //     });
  //     response.on("end", () => {
  //       callback(JSON.parse(responseData));
  //     });
  //   });
  // }
  // waitTwoSecond(data, callback) {
  //   setTimeout(() => {
  //     callback(data);
  //   }, 2000);
  // }
  // subtotal(unitPrice, quantity) {
  //   return unitPrice * quantity;
  // }
}

module.exports = LekeDemo;
