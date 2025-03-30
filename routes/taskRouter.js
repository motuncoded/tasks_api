// User Router Middleware

const express = require("express");

const authHandler = require("../middleware/authHandler");

const {
  create_a_task,
  get_a_task,
  get_all_tasks,
  update_a_task,
  delete_a_task,
} = require("../controllers/taskController.js");

const taskRouter = express
  .Router()
  //create a task
  .post("/task", authHandler, create_a_task)
  //get all tasks
  .get("/tasks", authHandler, get_all_tasks)
  // get a task by id
  .get("/task/:id", authHandler, get_a_task)
  //update a task
  .put("/task/:id", authHandler, update_a_task)
  //delete a task
  .delete("/task/:id", authHandler, delete_a_task);

module.exports = taskRouter;
