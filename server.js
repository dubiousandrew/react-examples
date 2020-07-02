const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.use(bodyParser.json());

const todos = [];

app.get("/ping", function (req, res) {
  return res.send({ pong: "pong" });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/todo", (req, res) => {
  console.log(req.body);
  todos.push(req.body.todo);
  console.log("todo added: ", JSON.stringify(todos));
  res.send(req.todo);
});

app.listen(process.env.PORT || 8080);
console.log("server started.");
