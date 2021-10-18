const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 }; //adding new key to req!!!!
    next();
  } else {
    res.status(401).send("Unathorized request");
  }
};

module.exports = authorize;
