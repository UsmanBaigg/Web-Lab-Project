const Content = require('../models/Content');

const addContent = async (req, res) => {
    try {
        const content = new Content(req.body);
        await content.save();
        res.status(201).json(content);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getContents = async (req, res) => {
    try {
        const contents = await Content.find();
        res.json(contents);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { addContent, getContents };
