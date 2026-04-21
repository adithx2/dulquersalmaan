// const mongoose = require('mongoose');

// const filmSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, 'Film title is required'],
//       trim: true,
//     },
//     year: {
//       type: Number,
//       required: [true, 'Release year is required'],
//     },
//     language: {
//       type: String,
//       required: true,
//       enum: ['Malayalam', 'Tamil', 'Telugu', 'Hindi', 'Kannada'],
//     },
//     languageCode: {
//       type: String,
//       enum: ['ML', 'TA', 'TE', 'HI', 'KN'],
//     },
//     role: { type: String, trim: true },
//     director: { type: String, trim: true },
//     genre: { type: String, trim: true },
//     note: { type: String, trim: true },
//     posterUrl: { type: String, default: '' },
//     featured: { type: Boolean, default: false },
//     boxOffice: { type: String, default: '' },
//     status: {
//       type: String,
//       enum: ['released', 'upcoming'],
//       default: 'released',
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Film', filmSchema);

const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  language: { type: String },
  languageCode: { type: String },
  role: { type: String },
  director: { type: String },
  genre: { type: String },
  note: { type: String },
  posterUrl: { type: String, default: '' },
  featured: { type: Boolean, default: false },
  boxOffice: { type: String, default: '' },
  status: { type: String, enum: ['released', 'upcoming'], default: 'released' },
}, { timestamps: true });

module.exports = mongoose.model('Film', filmSchema);
