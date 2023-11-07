const path = require("path");

// export both as an anon function
module.exports = (app) => {
  // gets index for home
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
  // gets notes html
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });
};
