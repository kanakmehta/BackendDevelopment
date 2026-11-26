# Express.js and EJS Student Demo

## Aim

To demonstrate server-side routing and rendering using Node.js, Express.js, and EJS.

## Technologies Used

- Node.js
- Express.js
- EJS
- JavaScript

## Implementation

The Express server defines an in-memory student collection. The `/` route renders the home page and `/students` renders an EJS template with the student data supplied by the server.

## Source Files

- `server.js`: Express server, routes, and student data
- `views/home.ejs`: Home page template
- `views/students.ejs`: Student list template
- `package.json`: Node.js project configuration

## Routes

| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Render the home page |
| GET | `/students` | Render the student list |

## How to Run

```bash
npm install
node server.js
```

Open `http://localhost:3000` in a browser.

## Result

The practical demonstrates how Express routes can pass server-side data to EJS templates for dynamic HTML rendering.
