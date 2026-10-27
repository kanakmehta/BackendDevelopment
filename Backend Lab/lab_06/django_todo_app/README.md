# Django To-Do App

A small Django application for creating, listing, completing, and deleting tasks. It uses SQLite for storage and Django templates for the interface.

## Run locally on Windows

From this folder, activate the virtual environment and start Django:

```powershell
.\venv\Scripts\Activate.ps1
python manage.py runserver
```

Open the local URL printed by Django. Use `/admin/` for the admin site. Create an admin account with `python manage.py createsuperuser` if needed.

## Main folders

- `todo/`: the To-Do application, its templates, static assets, and migrations.
- `todo_project/`: project settings and top-level URL configuration.
- `venv/`: locally installed Python packages; generated environment, not source code.
