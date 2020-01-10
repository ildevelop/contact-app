const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const apiService = require("./apiService.js");
const api = new apiService();

var app = express();
const PORT = process.env.PORT || 5000;

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "./../build")));

app.set("/static", path.join(__dirname, "./../build/static"));

app.use("/*", express.static(path.join(__dirname, "./../build")));

app.post("/api/getContacts", (req, res) => {
  api.getContacts(res);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
