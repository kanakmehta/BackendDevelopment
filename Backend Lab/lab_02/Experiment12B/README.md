# Experiment 12B: Cookies and Sessions in Express.js

## Aim
To implement cookies and server-side sessions in an Express.js application.

## Objective
To understand how cookies store client-side information and how sessions maintain user-specific state across multiple HTTP requests.

## Technologies Used
- Node.js
- Express.js
- express-session
- cookie-parser
- JavaScript

## Theory
HTTP is stateless, so a server does not automatically remember previous requests from a client. Cookies store small values in the browser and send them with later requests. Sessions store user-specific data on the server while a session identifier is maintained through a cookie.

## Implementation
The main demo in `session-cookie-demo/server.js` provides a simple login form. After login, the username is stored in the session and a `theme` cookie is created. The logout route destroys the session and clears the session cookie. The `source` folder also contains separate cookie and session examples for setting, retrieving, deleting, counting, and destroying stored state.

## Project Structure
```text
Experiment12B/
|-- package.json
|-- session-cookie-demo/
|   `-- server.js
`-- source/
    |-- cookie-example.js
    `-- session-example.js
```

## Important Routes
| File | Route | Purpose |
|---|---|---|
| `server.js` | `GET /` | Shows login form or logged-in user |
| `server.js` | `POST /login` | Stores username in session and sets a cookie |
| `server.js` | `GET /logout` | Destroys the session |
| `cookie-example.js` | `GET /set-cookie` | Creates a cookie |
| `cookie-example.js` | `GET /get-cookie` | Reads a cookie |
| `cookie-example.js` | `GET /delete-cookie` | Deletes a cookie |
| `session-example.js` | `GET /` | Counts visits using a session |
| `session-example.js` | `GET /destroy` | Destroys the session |

## How to Run
From `Experiment12B`:
```bash
npm install
node session-cookie-demo/server.js
```
Open `http://localhost:3000`.

The individual examples can also be run with Node.js from the same project after dependencies are installed.

## Result
The application successfully demonstrates persistence across requests using cookies and Express sessions.

## Conclusion
This experiment explains how state can be maintained in web applications through cookies and server-side sessions, including creation, retrieval, expiration, and destruction.
