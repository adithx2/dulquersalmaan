const About = require('../models/About');

// GET about (singleton — always return first doc or create default)
exports.getAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create({});
    }
    res.json({ success: true, data: about });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// PUT update about
exports.updateAbout = async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create(req.body);
    } else {
      about = await About.findByIdAndUpdate(about._id, req.body, {
        new: true,
        runValidators: true,
      });
    }
    res.json({ success: true, data: about });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
