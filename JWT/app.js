const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("JWT authentication");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
