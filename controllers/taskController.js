// Task Controller

const taskModel = require("../models/taskModel");

// Create a task
const create_a_task = async (req, res, next) => {
  const { title, description, category, deadline, completed } = req.body;
  const userId = req.user._id;

  try {
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    const newTask = new taskModel({
      user: userId,
      title,
      description,
      category: category.toLowerCase(),
      deadline,
      completed,
    });

    await newTask.save();

    res.status(201).json({ newTask, message: "Task created successfully" });
  } catch (error) {
    next(error);
  }
};

// Get a task
const get_a_task = async (req, res, next) => {
  const { id } = req.params;

  try {
    const task = await taskModel.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json({ task, message: "Task retrieved successfully" });
  } catch (error) {
    next(error);
  }
};

//Get all tasks
const get_all_tasks = async (req, res, next) => {
  const userId = req.user._id;
  const { categories, deadline } = req.query;

  try {
    const filter = { user: userId };
    // categories string is split by commas and trimmed of any extra spaces.
    if (categories) {
      const categoriesArray = categories
        .split(",")
        .map((category) => category.trim());
      filter.category = { $in: categoriesArray };
    }

    if (deadline) {
      filter.deadline = {
        $lte: parse(deadline, "dd/MM/yyyy", new Date()).toISOString(),
      };
    }
    const tasks = await taskModel.find(filter).populate("user");
    res.status(200).json({
      tasks,
      message: tasks.length
        ? "Tasks retrieved successfully."
        : "No tasks found.",
    });
  } catch (error) {
    next(error);
  }
};

const update_a_task = async (req, res, next) => {
  const { id } = req.params;
  const updates = req.body;

  const userId = req.user._id;

  try {
    const getTask = await taskModel.findById(id);
    // Find the task by ID
    if (!getTask) {
      return res
        .status(404)
        .json({ message: "Task not found with the provided ID" });
    }

    // Ensure only the owner can update the task
    if (getTask.user.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "Access denied: You can only update your own tasks.",
      });
    }
    // Update the task with the new details
    const updateTask = await taskModel.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    res
      .status(200)
      .json({ message: "Task updated successfully.", task: updateTask });
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
