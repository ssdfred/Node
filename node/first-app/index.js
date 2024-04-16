const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("App running on port 3000");
});

// // localhost:3000/
// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

// // localhost:3000/hello/tata
// app.get("/hello/:name", (req, res) => {
//   const name = req.params.name
//   res.send(`Hello ${name}`);
// })

// // localhost:3000/params?name=toto
// app.get("/param", (req, res) => {
//   const name = req.query.name
//   const lastname = req.query.lastname
//   res.send(`Hello ${name} ${lastname}`);
// })

app.post("/body", (req, res) => {
  console.log(req.body);
  res.send(`Body ${req.body.data} `);
});

const products = [{ id: 1, name: "souris", quantity: 12, price: 15.5 }];

// CRUD

// Create POST
// Read GET
// Update PUT/PATCH
// Delete DELETE

app.get("/get/product", (req, res) => {
  res.send(products);
}); // Liste
app.get("/post/product", (req, res) => {
  const name = req.query.name;
  const quantity = parseInt(req.query.quantity);
  const price = parseFloat(req.query.price);
  const product = { id: Date.now(),
    name: req.query.name,
     quantity: parseInt(req.query.quantity),
      price: parseFloat(req.query.price), };
      products.push(product);
      res.send(products);
}); // Créer un produit


app.get("/put/product/id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const quantity = parseInt(req.body.quantity);
  const price = parseFloat(req.body.price);
  const product = { id: Date.now(),
    name: req.body.name,
     quantity: parseInt(req.body.quantity),
      price: parseFloat(req.body.price), };
      products.push(product);
      res.send(products);
}); // modifier
app.get("/delete/product/:id", (req, res) => {}); // supprimer
