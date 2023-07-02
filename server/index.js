const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const port = 5003;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World");
});

// 新增 todo
app.post("/todos", async (req, res) => {
  try {
    const { content } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO items (content) VALUES ($1)",
      [content]
    );
    console.log(req.body);
    res.json(newTodo);
  } catch (error) {
    console.log(error.message);
  }
});

// 刪除 todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM items WHERE id = $1", [
      id,
    ]);
    res.json(deleteTodo);
  } catch (error) {}
});

// 列出所有 todo
app.get("/todos", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM items");

    res.json(result.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// main
app.listen(port, () => {
  console.log("Server is Running");
});
