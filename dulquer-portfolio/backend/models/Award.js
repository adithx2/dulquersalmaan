// const mongoose = require('mongoose');

// const awardSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Award name is required'],
//       trim: true,
//     },
//     category: { type: String, trim: true },
//     film: { type: String, trim: true },
//     year: { type: Number },
//     organization: { type: String, trim: true },
//     won: { type: Boolean, default: true },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Award', awardSchema);

const mongoose = require('mongoose');

const awardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  film: { type: String },
  year: { type: Number },
  organization: { type: String },
  won: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Award', awardSchema);