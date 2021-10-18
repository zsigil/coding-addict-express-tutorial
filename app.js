const express = require("express");
const app = express();
const port = 5000;

const { people } = require("./data");

app.get("/api/people", (req, res) => {
  res.status(200).json({ result: "success", data: people });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
