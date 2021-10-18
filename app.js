const express = require("express");
const app = express();
const morgan = require("morgan");
const port = 5000;

// req => middleware => res
const logger = require("./logger");
const authorize = require("./authorize");

//!own middleware
// app.use(logger); //for all routes
// app.use("/api", logger); // only for routes starting with /api
// app.use([logger, authorize]); //order matters!

//! express middleware
// app.use(express.static("./public"));

//! 3rd party middleware
//!eg. morgan
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", [logger, authorize], (req, res) => {
  console.log(req.user); //user key was added in authorize
  res.send("Products");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
