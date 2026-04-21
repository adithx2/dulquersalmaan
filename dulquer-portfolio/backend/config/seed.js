const mongoose = require('mongoose');
require('dotenv').config();

const Film = require('./models/Film');
const Award = require('./models/Award');
const About = require('./models/About');

const films = [
  { title: 'Second Show', year: 2012, language: 'Malayalam', languageCode: 'ML', director: 'Srinath Rajendran', genre: 'Crime Drama', note: 'Debut film', role: 'Harilal', featured: true, status: 'released' },
  { title: 'Ustad Hotel', year: 2012, language: 'Malayalam', languageCode: 'ML', director: 'Anwar Rasheed', genre: 'Drama', note: 'Filmfare Best Debut', role: 'Faizy', featured: true, status: 'released' },
  { title: 'ABCD', year: 2013, language: 'Malayalam', languageCode: 'ML', director: 'Martin Prakkat', genre: 'Comedy Drama', note: 'Singing debut', status: 'released' },
  { title: 'Neelakasham Pachakadal Chuvanna Bhoomi', year: 2013, language: 'Malayalam', languageCode: 'ML', director: 'Sameer Thahir', genre: 'Road Film', note: 'Road trip drama', status: 'released' },
  { title: 'Bangalore Days', year: 2014, language: 'Malayalam', languageCode: 'ML', director: 'Anjali Menon', genre: 'Drama', note: 'Highest-grossing Malayalam film at the time', role: 'Arjun', featured: true, boxOffice: '₹500 million', status: 'released' },
  { title: 'Vaayai Moodi Pesavum', year: 2014, language: 'Tamil', languageCode: 'TA', genre: 'Comedy', note: 'Tamil debut', featured: false, status: 'released' },
  { title: 'O Kadhal Kanmani', year: 2015, language: 'Tamil', languageCode: 'TA', director: 'Mani Ratnam', genre: 'Romance', note: 'Mani Ratnam collaboration', featured: true, status: 'released' },
  { title: 'Charlie', year: 2015, language: 'Malayalam', languageCode: 'ML', director: 'Martin Prakkat', genre: 'Adventure Drama', note: 'Kerala State Film Award for Best Actor', role: 'Charlie', featured: true, status: 'released' },
  { title: '100 Days of Love', year: 2015, language: 'Malayalam', languageCode: 'ML', genre: 'Romance', status: 'released' },
  { title: 'Kali', year: 2016, language: 'Malayalam', languageCode: 'ML', genre: 'Thriller', note: 'Anger management drama', status: 'released' },
  { title: 'Kammattipaadam', year: 2016, language: 'Malayalam', languageCode: 'ML', director: 'Rajeev Ravi', genre: 'Crime Drama', status: 'released' },
  { title: 'Solo', year: 2017, language: 'Malayalam', languageCode: 'ML', director: 'Bejoy Nambiar', genre: 'Anthology', status: 'released' },
  { title: 'Mahanati', year: 2018, language: 'Telugu', languageCode: 'TE', director: 'Nag Ashwin', genre: 'Biographical', note: 'Played Gemini Ganesan', status: 'released' },
  { title: 'Karwaan', year: 2018, language: 'Hindi', languageCode: 'HI', director: 'Akarsh Khurana', genre: 'Road Comedy', note: 'Bollywood debut with Irrfan Khan', featured: true, status: 'released' },
  { title: 'The Zoya Factor', year: 2019, language: 'Hindi', languageCode: 'HI', genre: 'Romantic Comedy', note: 'With Sonam Kapoor', status: 'released' },
  { title: 'Kurup', year: 2021, language: 'Malayalam', languageCode: 'ML', director: 'Srinath Rajendran', genre: 'Crime Thriller', note: 'Based on real criminal', featured: true, boxOffice: '₹78 Cr worldwide', status: 'released' },
  { title: 'Sita Ramam', year: 2022, language: 'Telugu', languageCode: 'TE', director: 'Hanu Raghavapudi', genre: 'Romantic War Drama', note: 'Critically acclaimed', featured: true, status: 'released' },
  { title: 'Lucky Baskhar', year: 2024, language: 'Telugu', languageCode: 'TE', director: 'Venky Atluri', genre: 'Thriller', note: 'Money laundering thriller', status: 'released' },
  { title: "I'm Game", year: 2026, language: 'Malayalam', languageCode: 'ML', director: 'Nahas Hidhayath', genre: 'Action Thriller', note: 'Onam 2026 release — 156-day shoot', featured: true, status: 'upcoming' },
];

const awards = [
  { name: 'Filmfare Best Male Debut — South', category: 'Best Male Debut', film: 'Ustad Hotel', year: 2013, organization: 'Filmfare Awards South', won: true },
  { name: 'Kerala State Film Award — Best Actor', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'Kerala State Film Awards', won: true },
  { name: 'Kerala Film Critics Association Award', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'Kerala Film Critics Association', won: true },
  { name: 'Filmfare Award — Best Actor Malayalam', category: 'Best Actor', film: 'Bangalore Days', year: 2015, organization: 'Filmfare Awards South', won: true },
  { name: 'Filmfare Award — Best Actor Malayalam', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'Filmfare Awards South', won: true },
  { name: 'Tamil Best Debut Male Award', category: 'Best Male Debut', film: 'Vaayai Moodi Pesavum', year: 2015, organization: 'Tamil Film Awards', won: true },
  { name: 'Gaddar Telangana State Film Award', category: 'Best Actor', film: 'Sita Ramam', year: 2023, organization: 'Telangana State Film Awards', won: true },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/dulquer-portfolio');
    console.log('Connected to MongoDB');

    await Film.deleteMany();
    await Award.deleteMany();
    await About.deleteMany();

    await Film.insertMany(films);
    console.log(`Seeded ${films.length} films`);

    await Award.insertMany(awards);
    console.log(`Seeded ${awards.length} awards`);

    await About.create({});
    console.log('Seeded about data');

    mongoose.connection.close();
    console.log('Seeding complete!');
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed();
