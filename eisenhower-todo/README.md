# Eisenhower Todo Application

## Aim

To build a task management application that organizes tasks using the Eisenhower Matrix and stores them in MongoDB Atlas.

## Technologies Used

- Node.js
- Express.js
- EJS
- MongoDB
- HTML and CSS
- dotenv

## Features

Tasks are classified into four groups based on urgency and importance:

1. Do: urgent and important
2. Schedule: not urgent and important
3. Delegate: urgent and not important
4. Eliminate: not urgent and not important

The application supports creating, displaying, and deleting tasks.

## Project Structure

- `app.js`: Express application, MongoDB connection, routes, and task logic
- `views/home.ejs`: Eisenhower Matrix display
- `views/new.ejs`: New task form
- `public/style.css`: Application styling
- `package.json`: Project dependencies and scripts

## Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Display tasks grouped into four quadrants |
| GET | `/tasks/new` | Display the new task form |
| POST | `/tasks` | Create a task |
| POST | `/tasks/:id/delete` | Delete a task |

## How to Run

Create a `.env` file containing your own MongoDB connection string:

```text
MONGODB_URI=your_mongodb_connection_string
```

Then run:

```bash
npm install
npm start
```

## Result

The application demonstrates Express routing, EJS rendering, MongoDB CRUD operations, environment-based configuration, and Eisenhower Matrix task categorization.

## Related PBL Repository

The repository also contains a `PBL_activity` reference to the separate DevOps project repository used for the PBL work.
