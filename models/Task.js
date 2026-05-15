const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    duedate: String
});

module.exports = mongoose.model("Task", taskSchema);