// /models/Dashboard.js

const mongoose = require('mongoose');

// Define the schema for the Dashboard
const dashboardSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', // Reference to the User model
            required: true,
        },
        destinations_visited: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Destination', // Reference to the Destination model
            },
        ],
        saved_destinations: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Destination', // Reference to the Destination model
            },
        ],
        preferences: {
            type: String,  // User preferences for types of destinations (e.g., 'adventure', 'beach', etc.)
            required: true,
        },
        notifications: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Notification', // Reference to Notification model
            },
        ],
    },
    { timestamps: true }  // Automatically add createdAt and updatedAt
);

// Create the Dashboard model using the schema
const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
