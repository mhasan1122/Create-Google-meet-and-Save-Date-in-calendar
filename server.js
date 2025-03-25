require('dotenv').config();
const express = require('express');
const path = require('path');
const meetRoutes = require('./routes/meetRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', meetRoutes);  // Changed from '/api' to '/' to match your frontend calls

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({ 
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});