const Film = require('../models/Film');

// GET all films
exports.getAllFilms = async (req, res) => {
  try {
    const { language, year, status, featured } = req.query;
    const filter = {};
    if (language) filter.language = language;
    if (year) filter.year = Number(year);
    if (status) filter.status = status;
    if (featured !== undefined) filter.featured = featured === 'true';

    const films = await Film.find(filter).sort({ year: -1 });
    res.json({ success: true, count: films.length, data: films });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// GET single film
exports.getFilmById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) return res.status(404).json({ success: false, message: 'Film not found' });
    res.json({ success: true, data: film });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// POST create film
exports.createFilm = async (req, res) => {
  try {
    const film = await Film.create(req.body);
    res.status(201).json({ success: true, data: film });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// PUT update film
exports.updateFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!film) return res.status(404).json({ success: false, message: 'Film not found' });
    res.json({ success: true, data: film });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// DELETE film
exports.deleteFilm = async (req, res) => {
  try {
    const film = await Film.findByIdAndDelete(req.params.id);
    if (!film) return res.status(404).json({ success: false, message: 'Film not found' });
    res.json({ success: true, message: 'Film deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
