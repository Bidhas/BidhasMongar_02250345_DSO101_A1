require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = [];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// CREATE todo
app.post("/todos", (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text
  };

  todos.push(todo);
  res.status(201).json(todo);
});

// UPDATE todo
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  todos = todos.map(todo =>
    todo.id === id ? { ...todo, text: req.body.text } : todo
  );

  res.json({ message: "Updated" });
});

// DELETE todo
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  todos = todos.filter(todo => todo.id !== id);

  res.json({ message: "Deleted" });
});

const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
