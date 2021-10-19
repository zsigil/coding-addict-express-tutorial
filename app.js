const express = require("express");
const app = express();
const port = 5000;

let { people } = require("./data");

app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

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

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ result: "success", person: name });
  }
  res.status(400).json({ result: "error", msg: "please provide a name" });
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const person = people.find((p) => p.id == Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ result: "error", msg: "person does not exist" });
  }
  const newPeople = people.map((person) => {
    if (person.id == Number(id)) {
      person.name = name; //!This changes original array!!!
    }
    return person;
  });
  res.status(200).json({ result: "success", data: people }); //people or newPeople
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;

  const person = people.find((p) => p.id == Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ result: "error", msg: "person does not exist" });
  }
  people = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ result: "success", data: people });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
