const express = require("express");
const app = express();
const port = 3002;
const path = require("path");
const mysql = require("mysql2");
const createUser = require("./users/createUser");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "duels_db",
  password: "12345",
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.use(express.json());
/*app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build", "index.html"));
});*/

app.post("/reg", (req, res) => {
  let result = createUser(connection, req.body, res);
});

app.get("/auth", (req, res) => {});

app.listen(port);
