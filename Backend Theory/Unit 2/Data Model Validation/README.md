# FastAPI Data Model Validation

## Aim

To demonstrate request and response data validation in FastAPI using Pydantic models.

## Technologies Used

- Python
- FastAPI
- Pydantic

## Implementation

`StudentCreate` validates incoming student data including name length, email format, allowed branch values, and an optional enrollment date. `StudentResponse` defines the response structure. The POST endpoint creates a student object only after FastAPI and Pydantic validate the request.

## API Endpoint

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/students` | Validate and create a student record |

## Validation Rules

- Name must contain 1 to 100 characters.
- Email must be a valid email address.
- Branch must be one of CSE, ECE, IT, ME, or CE.
- Enrollment date is optional and defaults to the current date when omitted.

## Result

The practical demonstrates automatic request validation, typed models, field constraints, and response models in FastAPI.
