const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Recived\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("It is Home Page");
        break;
      case "/about":
        res.end("Hello I am YAsh Bhawsar");
    }
  });
});

myServer.listen(8000, () => console.log("Server Started"));
