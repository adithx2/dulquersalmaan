const express = require('express');
const router = express.Router();
const {
  getAllFilms,
  getFilmById,
  createFilm,
  updateFilm,
  deleteFilm,
} = require('../controllers/filmController');

router.route('/').get(getAllFilms).post(createFilm);
router.route('/:id').get(getFilmById).put(updateFilm).delete(deleteFilm);

module.exports = router;
