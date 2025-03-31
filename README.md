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

Here is a table summarizing the endpoints:

| Endpoint           | Description                                                         | Method |
| ------------------ | ------------------------------------------------------------------- | ------ |
| /api/user/register | Register users that want to create, list, update, and delete tasks. | POST   |
| /api/user/login    | Login users that want to check and create more tasks.               | POST   |
| /api/user/logout   | Users are allowed to logout.                                        | POST   |

#### CRUD operation for tasks

| Endpoint       | Description                         | Method |
| -------------- | ----------------------------------- | ------ |
| /api/task      | Users are able to create tasks.     | POST   |
| /api/tasks/:id | Users are able to update tasks.     | PUT    |
| /api/tasks     | Users are able to get all tasks.    | GET    |
| /api/task/:id  | Users are able to get a task by id. | GET    |
| /api/tasks/:id | Users are able to delete a task.    | DELETE |

#### Task categorization and deadlines

| Endpoint                                  | Description                                                       | Method |
| ----------------------------------------- | ----------------------------------------------------------------- | ------ |
| /api/tasks/:id                            | Users are able to update tasks.                                   | PUT    |
| /api/tasks=?category=value&deadline=value | Users are able to get all tasks filtered by category and deadline | GET    |
| /api/tasks=?category=value                | Users are able to get all tasks filtered by category              | GET    |
| /api/tasks=?deadline=value                | Users are able to get all tasks filtered by deadline              | GET    |

#### User-specific task management

## 🛠️ Setup & Installation

1. Fork this repository

2. Clone the repository:

```sh
git clone https://github.com/username/task-management-api.git
```

3. Navigate to the project directory:

```sh
cd task-management-api
```

4. Install dependencies:

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
