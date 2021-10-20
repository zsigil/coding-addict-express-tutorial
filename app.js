const express = require("express");
const app = express();
const port = 5000;
const people = require("./routes/people");
const auth = require("./routes/auth");

app.use(express.static("./methods-public"));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/", auth);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
