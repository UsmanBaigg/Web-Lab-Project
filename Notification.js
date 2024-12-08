// /models/Notification.js

const mongoose = require('mongoose');

// Define the schema for the Notification
const notificationSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true, // The message of the notification
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true,
        },
        read: {
            type: Boolean,
            default: false, // If the notification is read by the user
        },
        date: {
            type: Date,
            default: Date.now, // The date the notification was created
        },
    },
    { timestamps: true }  // Automatically add createdAt and updatedAt
);

// Create the Notification model using the schema
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
