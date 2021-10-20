let { people } = require("../data");

const getPeople = (req, res) => {
  res.status(200).json({ result: "success", data: people });
};

const createPerson = (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).json({ result: "success", person: name });
  }
  res.status(400).json({ result: "error", msg: "please provide a name" });
};

const updatePerson = (req, res) => {
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
};

const deletePerson = (req, res) => {
  const { id } = req.params;

  const person = people.find((p) => p.id == Number(id));
  if (!person) {
    return res
      .status(400)
      .json({ result: "error", msg: "person does not exist" });
  }
  people = people.filter((person) => person.id !== Number(id));
  res.status(200).json({ result: "success", data: people });
};

module.exports = {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson,
};
