const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
// route to html get and api post

// middleware to route from public file
// middleware to parse req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
require("./htmlRoute")(app);
require("./apiRoute")(app);

app.listen(PORT, () => {
  console.log(`listening at localhost${PORT}`);
});
