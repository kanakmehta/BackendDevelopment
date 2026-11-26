# Django Student Management API

## Aim

To demonstrate basic Django project structure, API-style views, routing, and custom middleware.

## Technologies Used

- Python
- Django
- SQLite

## Implementation

The `students_app` application provides HTTP and JSON responses for the student API. It includes endpoints for an API status response, student listing, and student detail. A custom `SimpleLoggingMiddleware` records request information, response status, and execution time.

## Important Files

- `manage.py`: Django management entry point
- `myproject/settings.py`: Project settings
- `myproject/urls.py`: Project URL configuration
- `students_app/views.py`: API views
- `students_app/urls.py`: Application routes
- `students_app/middleware.py`: Request and response logging middleware

## Result

The practical demonstrates the structure of a Django backend and the use of custom middleware around the request-response cycle.
