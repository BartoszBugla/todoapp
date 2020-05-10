const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
        },
        lastName: {
            minlength: 3,
            type: String,
            trim: true,
            required: true,
        },
        email: { type: String, required: true, unique: true, trim: true, minlength: 3 },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);
const User = mongoose.model("User", userSchema);

module.exports = User;