const express = require("express");
const app = express();
const port = 5000;
const { products } = require("./data");

app.get("/", (req, res) => {
  res.send(`<h1>Hello Moto</h1><a href="/api/products">products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, image, name } = product;
    return { id, image, name };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  const productID = req.params.productID; //will be string!!
  const product = products.find((p) => p.id == productID);
  if (!product) {
    return res.status(404).send("Product does not exist");
  }
  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  //http://localhost:5000/api/v1/query?search=a&limit=30
  const { search, limit } = req.query;
  let sortedProducts = [...products]; //create copy
  if (search) {
    sortedProducts = sortedProducts.filter((p) => p.name.startsWith(search));
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit)); //limit is a string!!!S
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] }); //you need to return in if statements if we are finished!
  }

  res.status(200).json(sortedProducts);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
