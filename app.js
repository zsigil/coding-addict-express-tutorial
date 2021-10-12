const express = require("express");
const app = express();

const path = require("path");
const port = 5000;

//setting up static files and middleware
app.use(express.static("./public"));

//! we don't need this if index.html is in public folder
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
// });

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Sorry, page not found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
