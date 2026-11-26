# Experiment 12A: Node.js, Express.js and EJS

## Aim
To build a Node.js application using Express.js and EJS that demonstrates server creation, routing, request data handling, multiple response formats, and dynamic server-side rendering.

## Objective
To understand how Express handles HTTP requests and responses, route parameters, query parameters, form or JSON data, and EJS templates.

## Technologies Used
- Node.js
- Express.js
- EJS
- Nodemon
- JavaScript

## Theory
Node.js allows JavaScript to run on the server. Express.js provides routing and middleware features for building web applications and APIs. EJS is a server-side templating engine that embeds dynamic JavaScript values into HTML templates before the response is sent to the client.

## Implementation
`app.js` creates an Express server on port 3000. It contains routes that return plain text, HTML, and JSON, accepts route and query parameters, performs a basic calculation, handles registration and login request bodies, and renders EJS pages. The `views` directory contains templates for the home page, user list, and user profile. `script.js` demonstrates basic Node.js execution.

## Project Structure
```text
nodejs-express-lab/
|-- app.js
|-- script.js
|-- package.json
|-- nodemon.js
`-- views/
    |-- home.ejs
    |-- users.ejs
    `-- profile.ejs
```

## Important Routes
| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Welcome response |
| GET | `/text` | Plain text response |
| GET | `/html` | HTML response |
| GET | `/json` | JSON response |
| GET | `/user/:id` | Demonstrates route parameters |
| GET | `/search` | Demonstrates query parameters |
| GET | `/calculate` | Performs an operation using query values |
| POST | `/register` | Accepts registration data |
| POST | `/login` | Demonstrates a simple login response |
| GET | `/home` | Renders an EJS home page |
| GET | `/users` | Renders a dynamic user list |
| GET | `/profile/:id` | Renders a user profile |

## How to Run
```bash
npm install
npm start
```
For development with Nodemon:
```bash
npm run dev
```
Open `http://localhost:3000` in a browser.

## Result
The application demonstrates core Node.js and Express concepts along with dynamic EJS rendering and different forms of HTTP request data.

## Conclusion
This experiment establishes the fundamentals of backend development with Node.js, Express.js, routing, request handling, responses, and server-side templates.
