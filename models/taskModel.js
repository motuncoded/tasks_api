const mongoose = require("mongoose");

const taskModel = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "", trim: true },
  category: {
    type: String,
    enum: ["Work", "Personal", "Other"],
    required: true,
  },
  deadline: { type: Date },
  completed: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
});

module.exports = mongoose.model("task", taskModel);
