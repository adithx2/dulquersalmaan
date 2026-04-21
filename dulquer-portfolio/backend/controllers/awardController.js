const Award = require('../models/Award');

exports.getAllAwards = async (req, res) => {
  try {
    const awards = await Award.find().sort({ year: -1 });
    res.json({ success: true, count: awards.length, data: awards });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getAwardById = async (req, res) => {
  try {
    const award = await Award.findById(req.params.id);
    if (!award) return res.status(404).json({ success: false, message: 'Award not found' });
    res.json({ success: true, data: award });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createAward = async (req, res) => {
  try {
    const award = await Award.create(req.body);
    res.status(201).json({ success: true, data: award });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.updateAward = async (req, res) => {
  try {
    const award = await Award.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!award) return res.status(404).json({ success: false, message: 'Award not found' });
    res.json({ success: true, data: award });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.deleteAward = async (req, res) => {
  try {
    const award = await Award.findByIdAndDelete(req.params.id);
    if (!award) return res.status(404).json({ success: false, message: 'Award not found' });
    res.json({ success: true, message: 'Award deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
