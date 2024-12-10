# Team Management Application

This project consists of a **Django REST API backend** and a **React frontend client** for managing team members. The backend provides RESTful API endpoints to handle CRUD operations for team members, while the frontend client interacts with these endpoints to display, add, edit, and delete team members.

## High-Level Design

The application has a client-server architecture:

- **Django Backend**: Serves as a REST API using Django REST Framework. It handles CRUD operations on the `TeamMember` data model and stores data in a SQLite database.
- **React Frontend**: A single-page application that interacts with the Django API to manage team members. The React app fetches data, displays the list of team members, and provides forms for adding and editing members.

## Data Model

The backend contains a single data model, `TeamMember`, which represents a team member’s details.

### `TeamMember` Model Fields

- **`id`**: Auto-generated primary key (integer).
- **`first_name`**: First name of the team member (string, max length 100).
- **`last_name`**: Last name of the team member (string, max length 100).
- **`email`**: Unique email of the team member (string, max length 100, must be unique).
- **`phone`**: Phone number of the team member (string, max length 20).
- **`role`**: Role of the team member, either "regular" or "admin" (string, choices).

## API Endpoints

The Django REST API provides the following endpoints for managing team members:

| HTTP Method | Endpoint                  | Description                      |
|-------------|---------------------------|----------------------------------|
| `GET`       | `/api/team-members/`      | Retrieve a list of team members. |
| `POST`      | `/api/team-members/`      | Add a new team member.           |
| `GET`       | `/api/team-members/<id>/` | Retrieve a team member by ID.    |
| `PUT`       | `/api/team-members/<id>/` | Update an existing team member.  |
| `DELETE`    | `/api/team-members/<id>/` | Delete a team member.            |

### Example JSON Response

`GET /api/team-members/`

```json
[
  {
    "id": 1,
    "first_name": "Jag",
    "last_name": "Deesh",
    "email": "jag.deesh@example.com",
    "phone": "123-456-7890",
    "role": "regular"
  },
  {
    "id": 2,
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "jane.smith@example.com",
    "phone": "987-654-3210",
    "role": "admin"
  }
]
```

## Installation Instructions

### Prerequisites

- Python 3.8+ and `pip`
- Node.js and npm
- Django and Django REST Framework
- `django-cors-headers` for handling CORS requests
- SQLite (default Django database, included by default)

### Backend (Django)

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/spirit3189/team-member-management.git
   cd team-member-management
   ```

2. **Set Up the Virtual Environment**:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install Dependencies**:
   ```bash
   cd insta_team_management
   pip install -r requirements.txt
   ```

4. **Configure Database and Run Migrations**:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Load Initial Data**:
   This migration populates the TeamMember table with sample records on initial setup.

   ```bash
   python manage.py loaddata team_members
   ```

6. **Run the Development Server**:
   ```bash
   python manage.py runserver
   ```

The Django backend should now be running at `http://localhost:8000`.

### Frontend (React)

1. **Navigate to the Client Directory**:
   ```bash
   cd client
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the React Development Server**:
   ```bash
   npm run dev
   ```

The React frontend should now be running at `http://localhost:5173` and will communicate with the Django backend.

### Custom Hook for API Calls (React)

The React app uses a custom hook, `useTeamMembers`, to handle API calls for team member management (list, add, update, and delete). This hook centralizes all API interactions, making the code modular and easy to maintain.

## Project Structure

### Django Backend Structure

```plaintext
backend/insta_team_management/
├── api/
│   ├── migrations/         # Database migrations
│   ├── __init__.py
│   ├── models.py           # TeamMember model
│   ├── serializers.py      # Serializers for API endpoints
│   ├── views.py            # API viewsets
│   └── urls.py             # API URL configuration
├── insta_team_management/
│   ├── settings.py         # Django settings
│   ├── urls.py             # Root URL configuration
│   └── wsgi.py
├── db.sqlite3              # SQLite database file
├── requirements.txt        # Python dependencies
└── manage.py
```

### React Frontend Structure

```plaintext
client/
├── src/
│   ├── components/         # Reusable components like TeamMemberForm
│   ├── hooks/              # Custom hooks (useTeamMembers)
│   ├── layout/             # common container layout for all pages
│   ├── pages/              # ListPage, AddPage, EditPage components
│   ├── App.jsx              # Root component
│   └── main.jsx            # React entry point
├── public/
├── package.json            # React dependencies
└── README.md
```

## Additional Notes

- **Database choice**: By default, Django uses SQLite, which is suitable for development.
- **CORS**: CORS is configured in Django to allow requests from `http://localhost:5173` (the React client).
- **API Error Handling on client**: Basic error handling is included in the React app’s custom hook (`useTeamMembers`), which displays errors to the user if API calls fail.

