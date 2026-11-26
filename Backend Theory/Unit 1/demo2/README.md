# Flask Student Management API

## Aim

To implement a simple REST-style student API using Flask.

## Technologies Used

- Python
- Flask

## Implementation

The application stores sample student records in memory and exposes routes for the API home, all students, and an individual student by ID. Missing student IDs return a 404 response.

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/` | Display the API title |
| GET | `/students` | Return all students as JSON |
| GET | `/students/<student_id>` | Return one student or a 404 error |

## How to Run

Install Flask and run:

```bash
python app.py
```

## Result

The practical demonstrates Flask routing, JSON responses, path parameters, and basic error handling.
