const express = require("express");
const app = express();
const port = 5000;

const { people } = require("./data");

app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome, ${name}`);
  }
  res.status(401).send("please provide credentials");
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ result: "success", data: people });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
