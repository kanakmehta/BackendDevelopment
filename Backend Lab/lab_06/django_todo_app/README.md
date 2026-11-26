# Django Todo Application

## Aim
To build a database-backed Todo web application using Django.

## Objective
To understand Django models, views, URL routing, templates, static files, form handling, CSRF protection, and SQLite persistence.

## Technologies Used
- Python
- Django
- SQLite
- HTML
- CSS
- JavaScript

## Theory
Django organizes web applications into projects and apps. Models define persistent data, views implement request handling, URL configurations map paths to views, and templates render dynamic HTML. Django's ORM provides a Python interface for database operations.

## Implementation
The `Task` model stores a title, completion status, and creation time. The application lists tasks, creates new tasks, toggles completion, and deletes tasks. Reusable templates provide a base layout, header, footer, and task-list fragment. Static CSS and JavaScript are loaded through Django's static file system.

## Project Structure
```text
django_todo_app/
|-- manage.py
|-- db.sqlite3
|-- todo/
|   |-- models.py
|   |-- views.py
|   |-- urls.py
|   |-- templates/
|   `-- static/
`-- todo_project/
    |-- settings.py
    `-- urls.py
```

## Main Routes
| Method | Route | Purpose |
|---|---|---|
| GET | `/` | Display all tasks |
| GET, POST | `/add/` | Display form and create a task |
| POST | `/toggle/<task_id>/` | Toggle completion status |
| POST | `/delete/<task_id>/` | Delete a task |
| GET | `/admin/` | Django admin site |

## How to Run
From this directory:
```bash
python manage.py migrate
python manage.py runserver
```
Open `http://127.0.0.1:8000/`.

## Result
A functional Todo application is created with persistent SQLite storage and Django-based CRUD operations.

## Conclusion
This project demonstrates the core Django request flow and the integration of models, views, templates, URLs, forms, and database operations in a complete web application.
