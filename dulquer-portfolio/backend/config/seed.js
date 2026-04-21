const mongoose = require('mongoose');
require('dotenv').config();

const Film = require('../models/Film');
const Award = require('../models/Award');
const About = require('../models/About');

const films = [
  {
    title: 'Second Show', year: 2012, language: 'Malayalam', languageCode: 'ML',
    director: 'Srinath Rajendran', genre: 'Crime Drama', note: 'Debut film', role: 'Harilal',
    featured: true, status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/9/99/Second_show_film.jpg'
  },
  {
    title: 'Ustad Hotel', year: 2012, language: 'Malayalam', languageCode: 'ML',
    director: 'Anwar Rasheed', genre: 'Drama', note: 'Filmfare Best Debut', role: 'Faizy',
    featured: true, status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/6/67/Ustad_Hotel_%28soundtrack%29.jpg'
  },
  {
    title: 'Theevram', year: 2012, language: 'Malayalam', languageCode: 'ML',
    genre: 'Thriller', role: 'Harsha Vardhan', note: '', status: 'released',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BZTJmMmQ4YzctOTZkMS00Y2U1LThlODYtOWI4MWQ0MjNlNTQ1XkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'ABCD', year: 2013, language: 'Malayalam', languageCode: 'ML',
    director: 'Martin Prakkat', genre: 'Comedy Drama', note: 'Singing debut',
    status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d5/'
  },
  {
    title: '5 Sundarikal', year: 2013, language: 'Malayalam', languageCode: 'ML',
    genre: 'Anthology', role: 'Injured stuntman', note: 'Kullante Bharya segment', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/0/01/5_Sundarikal_Poster.jpg'

  },
  {
    title: 'Pattam Pole', year: 2013, language: 'Malayalam', languageCode: 'ML',
    genre: 'Romance', role: 'Karthikeyan', note: '', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Pattam_Pole_2013_Malayalam_film_poster.jpg'
  },
  {
    title: 'Neelakasham Pachakadal Chuvanna Bhoomi', year: 2013, language: 'Malayalam',
    languageCode: 'ML', director: 'Sameer Thahir', genre: 'Road Film', note: 'Road trip drama',
    status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d5/NPCB_poster.jpg'
  },
  {
    title: 'Bangalore Days', year: 2014, language: 'Malayalam', languageCode: 'ML',
    director: 'Anjali Menon', genre: 'Drama', note: 'Highest-grossing Malayalam film at the time',
    role: 'Arjun', featured: true, boxOffice: '₹500 million', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5c/%27Bangalore_Days%27_2014_Malayalam_Film_-_Poster.jpg'
  },

  {
    title: 'Salalah Mobiles', year: 2014, language: 'Malayalam', languageCode: 'ML',
    genre: 'Comedy', role: 'Afzal', note: '', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Salalah_Mobiles_-_poster.jpg'
  },

  {
    title: 'Vikramadithyan', year: 2014, language: 'Malayalam', languageCode: 'ML', director: 'Lal Jose',
    genre: 'Action', role: 'Adithyan', note: '', status: 'released',
    posterUrl: 'https://c.saavncdn.com/060/Vickramadithyan-Malayalam-2014-500x500.jpg'
  },
  {
    title: 'Njaan', year: 2014, language: 'Malayalam', languageCode: 'ML', director: 'Renjith',
    genre: 'Drama', role: 'Dual role', note: 'Challenging dual role', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Njan_poster.jpg'
  },
  {
    title: 'Vaayai Moodi Pesavum', year: 2014, language: 'Tamil', languageCode: 'TA',
    genre: 'Comedy', note: 'Tamil debut', featured: false, status: 'released',
    posterUrl: 'https://i.pinimg.com/474x/66/20/f8/6620f899a764491d8fcb49b803041b14.jpg'
  },
  {
    title: 'O Kadhal Kanmani', year: 2015, language: 'Tamil', languageCode: 'TA',
    director: 'Mani Ratnam', genre: 'Romance', note: 'Mani Ratnam collaboration',
    featured: true, status: 'released',
    posterUrl: 'https://c.saavncdn.com/336/O-Kadhal-Kanmani-Tamil-2015-20200805153450-500x500.jpg'
  },
  {
    title: 'Charlie', year: 2015, language: 'Malayalam', languageCode: 'ML',
    director: 'Martin Prakkat', genre: 'Adventure Drama',
    note: 'Kerala State Film Award for Best Actor', role: 'Charlie',
    featured: true, status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Charlie_2015-Malayalam_film_poster.jpg/250px-Charlie_2015-Malayalam_film_poster.jpg'
  },
  {
    title: '100 Days of Love', year: 2015, language: 'Malayalam', languageCode: 'ML',
    genre: 'Romance', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/54/100_Days_of_Love.jpg'
  },
  {
    title: 'Kali', year: 2016, language: 'Malayalam', languageCode: 'ML',
    genre: 'Thriller', note: 'Anger management drama', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Kali_Malayalam_poster.jpg'
  },

  {
    title: 'Annmariya Kalippilaanu', year: 2016, language: 'Malayalam', languageCode: 'ML',
    genre: 'Drama', role: 'Angel', note: 'Cameo', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Annmariya_Kalippilaanu.jpg/250px-Annmariya_Kalippilaanu.jpg'
  },
  {
    title: 'Kammattipaadam', year: 2016, language: 'Malayalam', languageCode: 'ML',
    director: 'Rajeev Ravi', genre: 'Crime Drama', status: 'released',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BMjhkNjIzYzQtYmQ2OC00ZjViLTg0NjMtZjgwYWEzZDMyNzZiXkEyXkFqcGc@._V1_.jpg'
  },
  {
    title: 'Solo', year: 2017, language: 'Malayalam', languageCode: 'ML',
    director: 'Bejoy Nambiar', genre: 'Anthology', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Solo_2017_poster.jpg'

  },
  {
    title: 'Jomonte Suvisheshangal', year: 2017, language: 'Malayalam', languageCode: 'ML',
    genre: 'Drama', role: 'Jomon', note: '', status: 'released',
    posterUrl: 'https://timesofindia.indiatimes.com/photo/61203195.cms'
  },
  {
    title: 'Comrade in America', year: 2017, language: 'Malayalam', languageCode: 'ML',
    genre: 'Road Film', role: 'Aji', note: '', status: 'released',
    posterUrl: 'https://i.pinimg.com/1200x/34/f3/26/34f32699b90a38ff52e1cb4cb67cc430.jpg'
  },
  {
    title: 'Parava', year: 2017, language: 'Malayalam', languageCode: 'ML', director: 'Soubin Shahir',
    genre: 'Drama', role: 'Imran', note: 'Extended cameo', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Parava.jpg/250px-Parava.jpg'
  },
  {
    title: 'Mahanati', year: 2018, language: 'Telugu', languageCode: 'TE',
    director: 'Nag Ashwin', genre: 'Biographical', note: 'Played Gemini Ganesan',
    status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Mahanati_poster.jpg'
  },
  {
    title: 'Karwaan', year: 2018, language: 'Hindi', languageCode: 'HI',
    director: 'Akarsh Khurana',
    genre: 'Road Comedy', note: 'Bollywood debut with Irrfan Khan', featured: true, status: 'released',
    posterUrl: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/karwan-et00063098-05-10-2017-03-03-42.jpg'
  },
  {
    title: 'The Zoya Factor', year: 2019, language: 'Hindi', languageCode: 'HI',
    genre: 'Romantic Comedy', note: 'With Sonam Kapoor', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1e/The_Zoya_Factor_poster.jpg'
  },

  {
    title: 'Oru Yamandan Premakadha', year: 2019, language: 'Malayalam', languageCode: 'ML',
    genre: 'Comedy', role: 'Lallu', note: '', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Oru_Yamandan_Premakadha_poster.jpg'
  },

  {
    title: 'Varane Avashyamund', year: 2020, language: 'Malayalam', languageCode: 'ML',
    genre: 'Romance', role: 'Bibeesh', note: 'Also producer', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/5/55/Varane_Aavashyamundu.jpg'
  },

  {
    title: 'Kannum Kannum Kollaiyadithaal', year: 2020, language: 'Tamil', languageCode: 'TA',
    genre: 'Thriller', role: 'Siddharth', note: '', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/8/86/Kannum_Kannum_Kollaiyadithaal.jpg'
  },
  {
    title: 'Kurup', year: 2021, language: 'Malayalam', languageCode: 'ML',
    director: 'Srinath Rajendran', genre: 'Crime Thriller',
    note: 'Based on real criminal', featured: true, boxOffice: '₹78 Cr worldwide',
    status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/9/93/Kurup_%28film%29.jpeg'
  },
  {
    title: 'Sita Ramam', year: 2022, language: 'Telugu', languageCode: 'TE',
    director: 'Hanu Raghavapudi', genre: 'Romantic War Drama',
    note: 'Critically acclaimed', featured: true, status: 'released',
    posterUrl: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/sita-ramam-et00329656-30-05-2022-06-32-41.jpg'
  },

  {
    title: 'Chup: Revenge of the Artist', year: 2022, language: 'Hindi', languageCode: 'HI', director: 'R. Balki',
    genre: 'Thriller', role: 'Danny', note: '', status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/7/74/Chup-Revenge_of_The_Artist.jpeg'
  },

  {
    title: 'Hey Sinamika', year: 2022, language: 'Tamil', languageCode: 'TA',
    genre: 'Romance', role: 'Yaazhan', note: '', status: 'released',
    posterUrl: 'https://i.pinimg.com/1200x/fe/76/9a/fe769aeb9a00d4f5343d639e5e35e6de.jpg'
  },
  {
    title: 'Salute', year: 2022, language: 'Malayalam', languageCode: 'ML',
    genre: 'Crime Thriller', role: 'Aravind', note: 'Also producer', status: 'released',
    posterUrl: 'https://i.pinimg.com/736x/4c/0a/e9/4c0ae9cd7d7e7f2b561b1c52c0ab5948.jpg'
  },

  {
    title: 'King of Kotha', year: 2023, language: 'Malayalam', languageCode: 'ML',
    genre: 'Action', role: 'Kotha Raju', note: 'Also producer', status: 'released',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNjQ5YzdjMGUtODBjYi00Y2QyLTk2N2YtNGUxOTI4MjQxNWViXkEyXkFqcGc@._V1_.jpg'

  },

  {
    title: 'Kalki 2898 AD', year: 2024, language: 'Telugu', languageCode: 'TE',
    genre: 'Sci-Fi', role: 'Captain', note: 'Cameo', status: 'released',
    posterUrl: 'https://i.pinimg.com/736x/a4/a7/c1/a4a7c1987ff412866a0b245564324db8.jpg'
  },

  {
    title: 'Lucky Baskhar', year: 2024, language: 'Telugu', languageCode: 'TE',
    director: 'Venky Atluri', genre: 'Thriller', note: 'Money laundering thriller',
    status: 'released',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Lucky_Baskhar_film_poster.jpg'
  },

  {
    title: 'Lokah Chapter 1: Chandra', year: 2025, language: 'Malayalam', languageCode: 'ML',
    genre: 'Action', role: 'Charlie', note: 'Cameo · ₹300 Cr worldwide', featured: true, status: 'released',
    posterUrl: 'https://i.pinimg.com/1200x/90/2a/10/902a10f21e81422cc6d4abbf3e6a48eb.jpg'
  },
  {
    title: 'Kaantha', year: 2025, language: 'Tamil', languageCode: 'TN', director: 'Selvamani Selvaraj',
    genre: 'Period Crime', role: 'TKM', note: 'Also producer · 1950s Madras', status: 'released',
    posterUrl: 'https://i.pinimg.com/1200x/9b/04/22/9b0422059eb2c748eb2c463f0fc37266.jpg'
  },
  {
    title: 'Aakasamlo Oka Tara', year: 2026, language: 'Telugu', languageCode: 'TE',
    genre: 'Drama', note: 'Filming', status: 'upcoming',
    posterUrl: 'https://static.toiimg.com/thumb/126565902.jpg?imgsize=23456&photoid=126565902&width=600&resizemode=4'
  },
  {
    title: 'DQ41', year: 2026, language: 'Telugu', languageCode: 'TE',
    genre: 'TBA', note: 'Filming', status: 'upcoming',
    posterUrl: ''
  },
  {
    title: "I'm Game", year: 2026, language: 'Malayalam', languageCode: 'ML',
    director: 'Nahas Hidhayath', genre: 'Action Thriller',
    note: 'Onam 2026 release — 156-day shoot', featured: true, status: 'upcoming',
    posterUrl: 'https://m.media-amazon.com/images/M/MV5BNzY3YzA5YWYtNjIxNC00ZDU0LWEzNTAtMGZkM2ViNjI3MTA2XkEyXkFqcGc@._V1_.jpg'
  },

];

const awards = [
  // Filmfare Awards South
  { name: 'Filmfare Award — Best Male Debut', category: 'Best Male Debut', film: 'Ustad Hotel', year: 2013, organization: 'Filmfare Awards South', won: true },
  { name: 'Filmfare Award — Best Actor Malayalam', category: 'Best Actor', film: 'Bangalore Days', year: 2015, organization: 'Filmfare Awards South', won: true },
  { name: 'Filmfare Award — Best Actor Malayalam', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'Filmfare Awards South', won: true },
  { name: 'Filmfare Award — Best Actor Malayalam', category: 'Best Actor', film: 'Comrade in America', year: 2018, organization: 'Filmfare Awards South', won: true },
  { name: 'Filmfare Critics Award — Best Actor Telugu', category: 'Best Actor (Critics)', film: 'Mahanati', year: 2019, organization: 'Filmfare Awards South', won: true },
  { name: 'Filmfare Critics Award — Best Actor Telugu', category: 'Best Actor (Critics)', film: 'Sita Ramam', year: 2023, organization: 'Filmfare Awards South', won: true },

  // Kerala State Film Awards
  { name: 'Kerala State Film Award — Best Actor', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'Kerala State Film Awards', won: true },

  // Kerala Film Critics Association
  { name: 'Kerala Film Critics Association Award — Best Actor', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'Kerala Film Critics Association', won: true },

  // Tamil Awards
  { name: 'Tamil Best Debut Male Award', category: 'Best Male Debut', film: 'Vaayai Moodi Pesavum', year: 2015, organization: 'Tamil Film Awards', won: true },
  { name: 'SIIMA Award — Best Actor Tamil', category: 'Best Actor', film: 'Kannum Kannum Kollaiyadithaal', year: 2021, organization: 'SIIMA Awards', won: true },

  // Telugu Awards
  { name: 'Gaddar Telangana State Film Award', category: 'Best Actor', film: 'Sita Ramam', year: 2023, organization: 'Telangana State Film Awards', won: true },
  { name: 'CineMAA Award — Best Actor Telugu', category: 'Best Actor', film: 'Sita Ramam', year: 2023, organization: 'CineMAA Awards', won: true },

  // SIIMA Awards
  { name: 'SIIMA Award — Best Actor Malayalam', category: 'Best Actor', film: 'Kurup', year: 2022, organization: 'SIIMA Awards', won: true },
  { name: 'SIIMA Award — Best Actor Malayalam', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'SIIMA Awards', won: true },

  // Asianet Film Awards
  { name: 'Asianet Film Award — Best Actor', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'Asianet Film Awards', won: true },
  { name: 'Asianet Film Award — Best Actor', category: 'Best Actor', film: 'Bangalore Days', year: 2015, organization: 'Asianet Film Awards', won: true },

  // Vanitha Film Awards
  { name: 'Vanitha Film Award — Best Actor', category: 'Best Actor', film: 'Charlie', year: 2016, organization: 'Vanitha Film Awards', won: true },

  // Vijay Film Awards
  { name: 'Vijay Award — Best Actor Tamil', category: 'Best Actor', film: 'O Kadhal Kanmani', year: 2016, organization: 'Vijay Awards', won: true },

  // Forbes & Other Recognition
  { name: 'Forbes India Celebrity 100', category: 'Celebrity Recognition', film: '', year: 2017, organization: 'Forbes India', won: true },
  { name: 'GQ 50 Most Influential Young Indians', category: 'Influential Person', film: '', year: 2016, organization: 'GQ India', won: true },
  { name: 'GQ Best Dressed Men India', category: 'Best Dressed', film: '', year: 2016, organization: 'GQ India', won: true },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://adiths746_db_user:6StiwQRSoVwbMw95@cluster0.rcpppso.mongodb.net/DulquersalmanDB');
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
