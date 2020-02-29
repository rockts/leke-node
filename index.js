const http = require("http");

var options = {
  protocol: "http:",
  hostname: "api.douban.com",
  port: "80",
  method: "GET",
  path: "/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b"
};

var responseData = "";

var request = http.request(options, response => {
  // console.log(response);
  // console.log(response.statusCode);
  // console.log(response.headers);
  response.setEncoding("utf8");
  response.on("data", chunk => {
    // console.log(chunk);
    responseData += chunk;
  });

  response.on("end", () => {
    JSON.parse(responseData).subjects.map(item => {
      console.log(item.title);
    });
  });
});

request.on("error", error => {
  console.log(error);
});

request.end();
