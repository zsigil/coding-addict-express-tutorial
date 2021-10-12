const express = require("express");
const app = express();
const port = 5000;

const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
