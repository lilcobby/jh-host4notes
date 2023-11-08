const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });

  app.post("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) console.log(err);
      var note = JSON.parse(data);
      console.log(req.body);
      let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
      };

      note.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(note), (err, data) => {
        res.json(note);
      });
    });
  });
};
