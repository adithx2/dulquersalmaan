const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const filmRoutes = require('./routes/films');
const awardRoutes = require('./routes/awards');
const aboutRoutes = require('./routes/about');

const app = express();

// Middleware
// app.use(cors({ origin: process.env.CLIENT_URL }));

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URI || 'mongodb+srv://adiths746_db_user:6StiwQRSoVwbMw95@cluster0.rcpppso.mongodb.net/DulquersalmanDB')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// Routes
app.use('/api/films', filmRoutes);
app.use('/api/awards', awardRoutes);
app.use('/api/about', aboutRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Dulquer Portfolio API running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));