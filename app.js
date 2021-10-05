const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About page");
});

app.all("/*", (req, res) => {
  res.status(404).send("<h1>Sorry, page not found</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
