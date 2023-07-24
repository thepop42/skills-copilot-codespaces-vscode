// create web server with express
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// get all comments
app.get("/api/comments", (req, res) => {
  fs.readFile("./comments.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(data));
  });
});

// post a comment
app.post("/api/comments", (req, res) => {
  fs.readFile("./comments.json", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    const comments = JSON.parse(data);
    const newComment = {
      id: uuidv4(),
