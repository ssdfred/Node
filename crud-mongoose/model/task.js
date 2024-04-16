const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    description:String,
    start_date: Date,
    end_date: Date,
    done: Boolean
});

module.exports = mongoose.model("Task", taskSchema)