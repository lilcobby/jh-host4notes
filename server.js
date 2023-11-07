const express = require("express");
const app = express();
const PORT = 3001;
// route to html get and api post

require("./htmlRoute")(app);
require("./apiRoute")(app);

// middleware to route from public file
// middleware to parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`listening at localhost${PORT}`);
});
