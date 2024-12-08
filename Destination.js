// src/models/Destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    ratings: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'  // Reference to the Review model
      }
    ]
  },
  { timestamps: true }
);

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
