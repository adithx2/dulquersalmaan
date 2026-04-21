const express = require('express');
const router = express.Router();
const {
  getAllAwards,
  getAwardById,
  createAward,
  updateAward,
  deleteAward,
} = require('../controllers/awardController');

router.route('/').get(getAllAwards).post(createAward);
router.route('/:id').get(getAwardById).put(updateAward).delete(deleteAward);

module.exports = router;
