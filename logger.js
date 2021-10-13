const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send("Testing"); // terminate & send back response
  next(); // pass it on to next middleware
};

module.exports = logger;
