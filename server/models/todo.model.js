const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        hour: {
            minlength: 3,
            type: Number,
            trim: true,
        },
        minute: { type: Number },
        day: {
            type: Number,
            required: true,
        },
        month: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        done: {
            type: Boolean,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
