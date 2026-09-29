# Backend Development

A collection of backend development lab exercises, theory work, and a
complete **Eisenhower Todo** application built as part of backend
development coursework.

## 📁 Repository Structure

``` text
BackendDevelopment/
│
├── Backend Lab/
│   ├── lab_01/
│   ├── lab_02/
│   └── lab_03/
│
├── Backend Theory/
│   └── Unit 1/
│       ├── demo1/
│       └── demo2/
│
├── eisenhower-todo/
│   ├── public/
│   │   └── style.css
│   ├── views/
│   │   ├── home.ejs
│   │   └── new.ejs
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
│
├── .gitignore
└── README.md
```

## 📝 Eisenhower Todo

The `eisenhower-todo` project is a server-rendered Todo List application
based on the **Eisenhower Matrix**.

It allows users to create tasks, classify them according to urgency and
importance, view them in appropriate quadrants, and delete completed or
unwanted tasks.

### ✨ Features

-   Add new tasks
-   Add task title and description
-   Mark tasks as **Urgent**
-   Mark tasks as **Important**
-   Automatically organize tasks into Eisenhower Matrix quadrants
-   View stored tasks
-   Delete tasks
-   Store task data in MongoDB
-   Server-side rendering using EJS
-   Development support using Nodemon

### 🧠 Eisenhower Matrix

  Category        Urgent   Important  Action
  -------------- -------- ----------- ------------------------
  🔥 Do First      Yes        Yes     Complete immediately
  📅 Schedule       No        Yes     Plan for later
  ⚡ Delegate      Yes        No      Delegate when possible
  💤 Eliminate      No        No      Remove or avoid

## 🛠️ Technologies Used

### Backend

-   Node.js
-   Express.js

### Database

-   MongoDB
-   MongoDB Atlas
-   MongoDB Node.js Driver

### Templating & Frontend

-   EJS
-   HTML5
-   CSS3

### Development Tools

-   Nodemon
-   dotenv
-   Visual Studio Code

## 🔄 Application Flow

``` text
User
  ↓
Browser
  ↓
Express.js Server
  ↓
Route Handler
  ↓
MongoDB
  ↓
EJS Template
  ↓
Browser
```

### Add Task Flow

1.  User opens the Add Task page.
2.  Express renders the task form using EJS.
3.  The user submits the form.
4.  Express receives the form data.
5.  The server validates the task title.
6.  The task is inserted into MongoDB.
7.  The user is redirected to the home page.
8.  The home page displays the updated task list.

### Delete Task Flow

1.  User clicks the Delete button.
2.  A POST request is sent to `/tasks/:id/delete`.
3.  Express reads the task ID from the route parameter.
4.  The ID is validated and converted to a MongoDB `ObjectId`.
5.  The corresponding document is deleted from MongoDB.
6.  The user is redirected to the home page.

## 🌐 Routes

  Method   Route                 Purpose
  -------- --------------------- --------------------------------
  GET      `/`                   Display all tasks
  GET      `/tasks/new`          Display the task creation form
  POST     `/tasks`              Create a new task
  POST     `/tasks/:id/delete`   Delete a task

## 🗄️ Database

The application uses MongoDB Atlas.

Database:

``` text
todo_lab
```

Collection:

``` text
tasks
```

A task document contains fields such as:

``` javascript
{
  title: "Complete Backend Assignment",
  description: "Finish the backend lab",
  isUrgent: true,
  isImportant: true,
  createdAt: new Date()
}
```

MongoDB also provides a unique `_id` for each task document.

## 🔐 Environment Variables

The MongoDB connection string is stored in `.env`.

Example:

``` env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### Security

Never commit `.env` or database credentials to GitHub.

The `.gitignore` file should include:

``` text
node_modules/
.env
```

## ⚙️ Running the Project

### 1. Clone the repository

``` bash
git clone <your-repository-url>
```

### 2. Open the project

``` bash
cd BackendDevelopment/eisenhower-todo
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Configure `.env`

Create a `.env` file and add your MongoDB Atlas connection string:

``` env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### 5. Start the application

For normal execution:

``` bash
npm start
```

For development with Nodemon:

``` bash
npm run dev
```

### 6. Open the application

Visit:

``` text
http://localhost:3000
```

## 📦 NPM Scripts

  Command         Description
  --------------- --------------------------------------
  `npm start`     Starts the application using Node.js
  `npm run dev`   Starts the application using Nodemon

## 🔧 Backend Concepts Demonstrated

This repository and project demonstrate:

-   Node.js runtime
-   Express.js
-   HTTP methods
-   Routing
-   Middleware
-   Request and response objects
-   Form handling with `express.urlencoded()`
-   Static file serving with `express.static()`
-   EJS server-side rendering
-   MongoDB database operations
-   MongoDB Atlas
-   MongoDB `ObjectId`
-   Environment variables with dotenv
-   `async/await`
-   Promises
-   Error handling
-   Nodemon

## 📚 Backend Lab & Theory

The repository also contains:

-   Backend laboratory exercises
-   Backend theory demonstrations
-   Unit-wise learning material
-   Practical implementations related to backend development

## 🎯 Learning Objectives

The project is designed to provide practical understanding of:

-   Building a backend application with Node.js and Express
-   Connecting a web application to MongoDB
-   Handling HTTP requests and responses
-   Processing HTML form data
-   Rendering dynamic pages with EJS
-   Performing database operations
-   Managing environment variables
-   Structuring a backend project

## 👩‍💻 Project

**Backend Development Coursework**

Built with:

``` text
Node.js • Express.js • MongoDB • EJS
```

## 📄 License

This repository is intended for educational and academic purposes.
