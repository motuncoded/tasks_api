const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  category: {
    type: String,
    required: true,
  },
  deadline: { type: Date },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("task", taskModel);
