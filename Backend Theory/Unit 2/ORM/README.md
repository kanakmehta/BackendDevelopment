# SQLAlchemy ORM

## Aim

To demonstrate relational database modeling and relationships using SQLAlchemy ORM and SQLite.

## Technologies Used

- Python
- SQLAlchemy
- SQLite

## Implementation

The program defines `Department`, `Student`, `Course`, and `Enrollment` models. Foreign keys and `relationship` with `back_populates` create bidirectional associations between related records. SQLAlchemy creates the required tables in the SQLite database.

## Models

- Department
- Student
- Course
- Enrollment

## Key Concepts

- Declarative ORM models
- Primary and foreign keys
- One-to-many relationships
- Enrollment relationships between students and courses
- Bidirectional relationships using `back_populates`
- SQLite database creation through SQLAlchemy

## Result

The practical demonstrates how Python classes can represent relational tables and relationships using an ORM.
