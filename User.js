const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/\S+@\S+\.\S+/, 'Please enter a valid email'],
        },
        password: {
            type: String,
            required: true,
            minlength: 6, // Minimum length for password
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    { timestamps: true }
);

// Create and export the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
