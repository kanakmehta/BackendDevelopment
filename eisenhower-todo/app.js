require("dotenv").config();
const express = require("express");
const path = require("path");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;
let tasksCollection;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("todo_lab");
    tasksCollection = db.collection("tasks");
    console.log("Connected to MongoDB Atlas - todo_lab");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// GET / - show Eisenhower matrix
app.get("/", async (req, res) => {
  try {
    const tasks = await tasksCollection.find().sort({ createdAt: -1 }).toArray();

    const quadrants = {
      do: tasks.filter(t => t.isUrgent && t.isImportant),
      schedule: tasks.filter(t => !t.isUrgent && t.isImportant),
      delegate: tasks.filter(t => t.isUrgent && !t.isImportant),
      eliminate: tasks.filter(t => !t.isUrgent && !t.isImportant),
    };

    res.render("home", { quadrants });
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).send("Server error while fetching tasks");
  }
});

// GET /tasks/new - show add task form
app.get("/tasks/new", (req, res) => {
  res.render("new");
});

// POST /tasks - create a new task
app.post("/tasks", async (req, res) => {
  try {
    const { title, description, isUrgent, isImportant } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).send("Title is required. Go back and try again.");
    }

    const newTask = {
      title: title.trim(),
      description: description ? description.trim() : "",
      isUrgent: isUrgent === "on",
      isImportant: isImportant === "on",
      createdAt: new Date(),
    };

    await tasksCollection.insertOne(newTask);
    res.redirect("/");
  } catch (err) {
    console.error("Error adding task:", err);
    res.status(500).send("Server error while adding task");
  }
});

// POST /tasks/:id/delete - delete a task
app.post("/tasks/:id/delete", async (req, res) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).send("Invalid task id");
    }

    await tasksCollection.deleteOne({ _id: new ObjectId(id) });
    res.redirect("/");
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).send("Server error while deleting task");
  }
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Eisenhower Todo running at http://localhost:${PORT}`);
  });
});
