# Experiment 13A: MongoDB and Mongoose User Management

## Aim
To connect an Express.js application to MongoDB using Mongoose and perform database operations through a structured schema and model.

## Objective
To understand MongoDB connectivity, Mongoose schemas, models, validation, and database-backed Express routes.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Theory
MongoDB stores data as documents. Mongoose is an Object Data Modeling library for Node.js that provides schemas, validation, models, and convenient methods for interacting with MongoDB collections. Environment variables can be used to keep the database connection string outside the source code.

## Implementation
`server.js` loads `MONGO_URI` from the environment, connects to MongoDB, defines a `User` schema with username, email, password, and creation time, creates a Mongoose model, and exposes routes for working with user data.

## Project Structure
```text
mongoose-demo/
|-- server.js
|-- package.json
|-- package-lock.json
|-- .gitignore
`-- README.md
```

## How to Run
Create a `.env` file with a valid MongoDB connection string:
```text
MONGO_URI=your_mongodb_connection_string
```
Then run:
```bash
npm install
node server.js
```

## Result
The application connects Express to MongoDB and demonstrates structured document storage using a Mongoose schema and model.

## Conclusion
This experiment provides practical understanding of MongoDB integration with Node.js and the role of Mongoose in defining and managing application data.
