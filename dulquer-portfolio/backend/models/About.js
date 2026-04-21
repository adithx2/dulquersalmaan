const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema(
  {
    fullName: { type: String, default: 'Dulquer Salmaan' },
    born: { type: String, default: 'July 28, 1983, Kochi, Kerala' },
    education: { type: String, default: 'Purdue University, USA (BBA)' },
    spouse: { type: String, default: 'Amal Sufiya (m. 2011)' },
    children: { type: String, default: 'Maryam Ameerah Salmaan' },
    father: { type: String, default: 'Mammootty' },
    productionHouse: { type: String, default: 'Wayfarer Films (est. 2019)' },
    height: { type: String, default: "5'9\"" },
    bio: {
      type: String,
      default:
        'Born to acting legend Mammootty, Dulquer chose to earn his place without shortcuts — debuting in Second Show (2012) alongside newcomers. From the rooftop kitchens of Ustad Hotel to the open roads of Neelakasham Pachakadal Chuvanna Bhoomi, he built a reputation for picking films with soul over spectacle.',
    },
    languages: {
      type: [String],
      default: ['Malayalam', 'Tamil', 'Telugu', 'Hindi', 'Kannada'],
    },
    socialLinks: {
      instagram: { type: String, default: 'https://www.instagram.com/dqsalmaan' },
      twitter: { type: String, default: 'https://twitter.com/dulQuer' },
    },
    heroStats: {
      debutYear: { type: Number, default: 2012 },
      totalFilms: { type: Number, default: 40 },
      filmfareAwards: { type: Number, default: 5 },
      languages: { type: Number, default: 5 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', aboutSchema);
