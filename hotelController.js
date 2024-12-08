const Hotel = require('../models/Hotel');

// Add a new hotel
const addHotel = async (req, res) => {
    try {
        const hotel = new Hotel(req.body);
        await hotel.save();
        res.status(201).json(hotel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all hotels
const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single hotel by ID
const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        res.json(hotel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update a hotel
const updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        res.json(hotel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete a hotel
const deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        res.json({ message: 'Hotel deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    addHotel,
    getHotels,
    getHotelById,
    updateHotel,
    deleteHotel,
};
