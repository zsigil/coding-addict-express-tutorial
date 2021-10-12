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
  return res.json(product);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
