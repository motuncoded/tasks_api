# Task Management API

Welcome to the Task Management API! T

his API allows users to create,
read, update, and delete tasks. Users are able to categorize tasks, set
deadlines, and mark tasks as complete or incomplete.

## 🚀 Features

➢ **User registration and login**
➢ **CRUD operations for tasks**
➢ **Task categorization and deadlines**
➢ **User-specific task management**

## 📚 API Documentation

### Base URL

```
https://tasks-api-axia.vercel.app
```

### Endpoints

#### User registration and login

- **Register a user**

Register users that want to create, list, update and delete tasks.

```
POST /api/user/register
```

- **Login a user**

Login users that want to check and create more tasks.

```
POST /api/user/login
```

- **Logout a user**

Users are allowed to logout.

```
POST /api/user/logout
```

#### Create a Task

Users are able to create tasks

```
POST /api/task
```

#### Update a Task

Users are able to update tasks

```
PUT /api/tasks/:id
```

#### Get all tasks

Users are able to get all tasks

```
GET /api/tasks
```

#### Get all tasks

Users are able to get a task by id

```
GET /api/task/:id
```

#### Delete a Task

Users are able to delete a task

```
DELETE /api/tasks/{id}
```





<!-- ##### Query Parameters

- `status` (optional): Filter tasks by status (`pending` or `completed`)
- `priority` (optional): Filter tasks by priority (`low`, `medium`, `high`)

 -->

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
