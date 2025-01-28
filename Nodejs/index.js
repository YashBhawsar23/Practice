const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Recived\n`;
  const muUrl = url.parse(req.url);
  console.log(muUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("It is Home Page");
        break;
      case "/about":
        res.end("Hello I am YAsh Bhawsar");
        break;
      default:
        res.end("404 Page Not Found");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started"));
