// src/controllers/reviewController.js

const Review = require('../models/Review');
const Destination = require('../models/Destination');

// Get reviews for a specific destination
exports.getReviews = async (req, res) => {
  try {
    // Extract destinationId from the request params
    const { destinationId } = req.params;

    // Find the destination by ID and populate reviews
    const destination = await Destination.findById(destinationId).populate('reviews');

    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    // Send the reviews of the destination
    res.status(200).json({
      message: 'Reviews fetched successfully',
      reviews: destination.reviews,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Add a review for a destination
exports.addReview = async (req, res) => {
  try {
    const { userId, destinationId, reviewText, rating } = req.body;

    // Validation: Ensure all fields are provided
    if (!userId || !destinationId || !reviewText || !rating) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if destination exists
    const destination = await Destination.findById(destinationId);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    // Create a new review
    const newReview = new Review({
      userId,
      destinationId,
      reviewText,
      rating,
    });

    // Save the review
    await newReview.save();

    // Add the review to the destination's reviews list
    destination.reviews.push(newReview._id);
    await destination.save();

    // Return the newly added review
    res.status(201).json({
      message: 'Review added successfully',
      review: newReview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding review', error });
  }
};
