const mongoose = require('mongoose');

const contentSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true }, // e.g., 'destination', 'hotel', 'attraction'
    images: [String],
    videos: [String],
}, { timestamps: true });

const Content = mongoose.model('Content', contentSchema);
module.exports = Content;
