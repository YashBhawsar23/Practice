const http = require("http");

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
  res.send("Hello From Yash");
});

app.listen(8000, console.log("Server Started"));
