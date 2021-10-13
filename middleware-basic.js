const express = require("express");
const app = express();
const port = 5000;

// req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("Testing"); // terminate & send back response
  next(); // pass it on to next middleware
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
