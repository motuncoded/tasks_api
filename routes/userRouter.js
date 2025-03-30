// User Router Middleware

const express = require("express");
const { register, login } = require("../controllers/userController");
// const authHandler = require("../middleware/authHandler");

const userRouter = express
  .Router()
  // register a user
  .post("/user/register", register)
  // login a user
  .post("/user/login", login)
  //logout a user
  .post("/user/logout", logout);
module.exports = userRouter;
