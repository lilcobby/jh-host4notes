const path = require("path");
const app = require("express").Router();
// gets index for home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
// gets notes html
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

module.exports = app;
