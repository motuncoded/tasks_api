// Task Controller

const taskModel = require("../models/taskModel");
const { parse, formatISO, isValid } = require("date-fns");

// Create a task
const create_a_task = async (req, res, next) => {
  const userId = req.user._id;
  try {
    const newTask = await taskModel.create({ ...req.body, user: userId });
    res.status(201).json({ newTask, message: "Task created successfully" });
  } catch (error) {
    next(error);
  }
};

// Get a task
const get_a_task = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const getTask = await taskModel.findById(id);
    if (!getTask || getTask.user.toString() !== userId.toString()) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ getTask, message: "Task found successfully" });
  } catch (error) {
    next(error);
  }
};

//Get all tasks
const get_all_tasks = async (req, res, next) => {
  const userId = req.user._id;
  const { category, deadline } = req.query;

  try {
    let filter = { user: userId };
    if (category) {
      filter.category = category;
    }

    if (deadline) {
      const parsedDeadline = parse(deadline, "dd/MM/yyyy", new Date());
      if (!isValid(parsedDeadline)) {
        return res
          .status(400)
          .json({ message: "Invalid deadline format. Use DD/MM/YYYY." });
      }
      filter.deadline = {
        $lte: formatISO(parsedDeadline),
      };
    }
    const tasks = await taskModel.find(filter);
    if (tasks.length === 0) {
      return res.status(404).json({ message: "No tasks found." });
    }

    res.status(200).json({
      tasks,
      message: "Tasks retrieved successfully.",
    });
  } catch (error) {
    next(error);
  }
};

const update_a_task = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user._id;

  try {
    const updatedTask = await taskModel.findOneAndUpdate(
      { _id: id, user: userId },
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedTask) {
      return res
        .status(404)
        .json({ message: "Task not found or unauthorized" });
    }

    res
      .status(200)
      .json({ task: updatedTask, message: "Task updated successfully." });
  } catch (error) {
    next(error);
  }
};

const delete_a_task = async (req, res, next) => {
  const userId = req.user._id;
  const { id } = req.params;

  try {
    const getTask = await taskModel.findById(id);
    if (!getTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    if (getTask.user.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "Access denied: You can only delete your own tasks.",
      });
    }
    const deleteTask = await taskModel.findByIdAndDelete(id);

    if (!deleteTask) {
      return res
        .status(404)
        .json({ message: "Task not found with the provided ID." });
    }
    res
      .status(200)
      .json({ getTask: deleteTask, message: "Task deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create_a_task,
  get_a_task,
  get_all_tasks,
  update_a_task,
  delete_a_task,
};
