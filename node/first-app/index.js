const express = require('express');

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log('App running on port 3000');
});

app.get('/', (req, res) => {
  res.send('Hello Fred!');
});

// localhost:3000/hello/??
app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}!`);
})

app.get("/params", (req, res) => {
  const name = req.query.name
  res.send(`Hello ${name}!`);

})


// Create a new todo
app.post('/post', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.send(todo);
})


const todos = [{titre : String, description : String, date_debut : Date, date_fin : Date, done : Boolean}];



