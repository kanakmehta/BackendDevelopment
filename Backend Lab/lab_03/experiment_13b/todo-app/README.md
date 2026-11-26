# Experiment 13B: MongoDB Todo API with Authentication

## Aim
To build a database-backed Todo application using Express.js and MongoDB with user authentication.

## Objective
To apply MongoDB and Mongoose concepts in a practical API and use password hashing and JSON Web Tokens for authentication.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token
- dotenv
- Nodemon

## Theory
A backend API can combine database persistence with authentication so that application resources are associated with verified users. Mongoose manages MongoDB documents, bcrypt hashes passwords before storage, and JSON Web Tokens can represent authenticated sessions between the client and server.

## Implementation
The project is centered on `server.js` and uses Express middleware, MongoDB through Mongoose, environment variables, bcryptjs, and JSON Web Tokens. The application implements user-related authentication logic and Todo data operations with persistent storage.

## Project Structure
```text
todo-app/
|-- server.js
|-- package.json
|-- package-lock.json
|-- .env
`-- README.md
```

## How to Run
Install dependencies:
```bash
npm install
```
Ensure the required environment values, including the MongoDB connection configuration, are present in `.env`. Then run:
```bash
npm start
```
For development:
```bash
npm run dev
```

## Security Note
The `.env` file may contain sensitive configuration and should not be committed to a public repository. Use an `.env.example` file with placeholder values when documenting required variables.

## Result
The project demonstrates a MongoDB-backed Todo API combined with authentication-related backend concepts.

## Conclusion
This experiment extends basic database connectivity into a more realistic backend application using persistent data, password hashing, and token-based authentication.
