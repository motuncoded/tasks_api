![Axia Africa](/axia_africa.png)

# Task Management API

Welcome to the Task Management API! This API allows users to create,
read, update, and delete tasks. Users are able to categorize tasks, set
deadlines, and mark tasks as complete or incomplete.

## 🚀 Features

- **Create Tasks:** Add new tasks with details such as title, description, due date, and priority.
- **Update Tasks:** Modify existing tasks' details.
- **Delete Tasks:** Remove tasks that are no longer needed.


## 📚 API Documentation

### Base URL

```
https://api.example.com/v1
```

### Endpoints

#### Create a Task

```
POST /tasks
```

##### Request Body

```json
{
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "priority": "low | medium | high"
}
```

##### Response

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "priority": "low | medium | high",
  "status": "pending | completed",
  "created_at": "YYYY-MM-DDTHH:MM:SSZ",
  "updated_at": "YYYY-MM-DDTHH:MM:SSZ"
}
```

#### Update a Task

```
PUT /tasks/{id}
```

##### Request Body

```json
{
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "priority": "low | medium | high",
  "status": "pending | completed"
}
```

##### Response

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "due_date": "YYYY-MM-DD",
  "priority": "low | medium | high",
  "status": "pending | completed",
  "created_at": "YYYY-MM-DDTHH:MM:SSZ",
  "updated_at": "YYYY-MM-DDTHH:MM:SSZ"
}
```

#### Delete a Task

```
DELETE /tasks/{id}
```

##### Response

```json
{
  "message": "Task deleted successfully"
}
```

#### List Tasks

```
GET /tasks
```

##### Query Parameters

- `status` (optional): Filter tasks by status (`pending` or `completed`)
- `priority` (optional): Filter tasks by priority (`low`, `medium`, `high`)

##### Response

```json
[
  {
    "id": "string",
    "title": "string",
    "description": "string",
    "due_date": "YYYY-MM-DD",
    "priority": "low | medium | high",
    "status": "pending | completed",
    "created_at": "YYYY-MM-DDTHH:MM:SSZ",
    "updated_at": "YYYY-MM-DDTHH:MM:SSZ"
  }
]
```

## 🛠️ Setup & Installation

1. Clone the repository:

```sh
git clone https://github.com/yourusername/task-management-api.git
```

2. Navigate to the project directory:

```sh
cd task-management-api
```

3. Install dependencies:

```sh
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add necessary environment variables (e.g., database connection strings).

5. Start the server:

```sh
npm start
```

## 🧪 Running Tests

Execute the following command to run tests:

```sh
npm test
```

## 🤝 Contributing

Contributions are welcome! Please create an issue or submit a pull request with your improvements.

## 📃 License

This project is licensed under the MIT License.

## 📫 Contact

For questions or support, please reach out to [motuncoded](mailto:motuncoded@example.com).

Thank you for using the Task Management API! Happy tasking!
