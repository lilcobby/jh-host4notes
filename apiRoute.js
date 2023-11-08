const path = require("path");
const fs = require("fs");
const uniqid = require("uniqid");
// exports post and delete
module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });
  // post works, reads file, parses data, pushes req.body.text and title to the array, and adds new id, converts back to string and writes file
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
  //   delete was in the wrong set of braces... for two hours....
  // Delete works reads json file, parses array in file, filters for every object id that is not the selected object id, rewrites the json file.
  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) console.log(err);
      var note = JSON.parse(data);
      console.log(data);
      let deletedNote = note.filter((notes) => notes.id !== req.params.id);
      fs.writeFile("./db/db.json", JSON.stringify(deletedNote), (err, data) => {
        res.json(deletedNote);
      });
    });
  });
};
