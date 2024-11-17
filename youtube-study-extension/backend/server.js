const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let topics = [];
let tasks = [];

// Routes
app.post("/topics", (req, res) => {
  const { topic, duration } = req.body;
  topics.push({ topic, duration });
  res.json({ message: "Topic added", topics });
});

app.post("/tasks", (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.json({ message: "Task added", tasks });
});

app.get("/progress", (req, res) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const progress = (completedTasks / tasks.length) * 100;
  res.json({ progress });
});

app.listen(5000, () => console.log("Server running on port 5000"));
