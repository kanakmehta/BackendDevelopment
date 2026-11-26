# Student Management API using FastAPI

## Aim
To develop a REST API for managing students, courses, departments, and enrollments using FastAPI and SQLAlchemy.

## Objective
To implement CRUD operations, relational database models, request validation, filtering, pagination, dependency injection, and HTTP error handling.

## Technologies Used
- Python
- FastAPI
- SQLAlchemy
- Pydantic
- SQLite
- Uvicorn

## Theory
FastAPI is a Python framework for building APIs using type hints and automatic validation. Pydantic schemas validate request and response data. SQLAlchemy maps Python classes to relational database tables and provides database sessions for queries and transactions. FastAPI also automatically generates interactive API documentation.

## Implementation
`main.py` defines the API routes. `models.py` contains SQLAlchemy database models, `schemas.py` defines Pydantic request and response schemas, and `database.py` configures the SQLite engine, session factory, and database dependency. The API supports student CRUD operations, filtering, search and pagination, course operations, and student enrollment management.

## Project Structure
```text
student_api/
|-- main.py
|-- database.py
|-- models.py
|-- schemas.py
|-- requirements.txt
|-- students.db
`-- README.md
```

## Main API Endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/students` | List students with filters, search, and pagination |
| GET | `/students/{student_id}` | Get one student |
| POST | `/students` | Create a student |
| PUT | `/students/{student_id}` | Update a student |
| DELETE | `/students/{student_id}` | Delete a student |
| GET | `/courses` | List courses |
| POST | `/courses` | Create a course |
| GET | `/students/{student_id}/enrollments` | List student enrollments |
| POST | `/students/{student_id}/enrollments` | Create an enrollment |
| DELETE | `/students/{student_id}/enrollments/{course_id}` | Delete an enrollment |

## How to Run
Create and activate a Python virtual environment, then install dependencies:
```bash
pip install -r requirements.txt
```
Run the API:
```bash
uvicorn main:app --reload
```
Open the interactive API documentation at:
```text
http://127.0.0.1:8000/docs
```

## Result
A structured REST API is created with relational data persistence, validation, filtering, pagination, and enrollment management.

## Conclusion
This experiment demonstrates how FastAPI, Pydantic, SQLAlchemy, and SQLite can be combined to build a validated and database-driven REST API.
