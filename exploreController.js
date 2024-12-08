// /controllers/exploreController.js

const Destination = require('../models/Destination');

const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json({ destinations });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getDestinations };
