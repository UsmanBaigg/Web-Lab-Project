const mongoose = require('mongoose');

// Define the schema for the Explore
const exploreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,  // Name of the destination (e.g., Eiffel Tower)
        },
        description: {
            type: String,
            required: true,  // A detailed description of the destination
        },
        location: {
            type: String,
            required: true,  // Location (e.g., Paris, France)
        },
        image_url: {
            type: String,
            required: true,  // URL of the destination image
        },
        tags: [
            {
                type: String,  // Tags for categorizing destinations (e.g., 'beach', 'mountain', etc.)
            },
        ],
        ratings: {
            type: Number,  // Rating for the destination (e.g., average rating)
            min: 0,
            max: 5,
        },
    },
    { timestamps: true }  // Automatically add createdAt and updatedAt
);

// Virtual field to rename _id to destinationId when fetching the document
exploreSchema.virtual('destinationId').get(function() {
    return this._id.toString();
});

// Create the Explore model using the schema
const Explore = mongoose.model('Explore', exploreSchema);

module.exports = Explore;
