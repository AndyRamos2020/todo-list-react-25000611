const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema({
    name: String,
    description: String,
    duedate: String
});

module.exports = mongoose.model("Goal", goalSchema);