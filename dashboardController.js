// /controllers/dashboardController.js

const User = require('../models/User');

const getDashboardData = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('reviews');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ dashboardData: user });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getDashboardData };
