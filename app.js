const express = require("express");
const app = express();
const port = 5000;

// req => middleware => res
const logger = require("./logger");
const authorize = require("./authorize");

// app.use(logger); //for all routes
// app.use("/api", logger); // only for routes starting with /api
app.use([logger, authorize]); //order matters!

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
