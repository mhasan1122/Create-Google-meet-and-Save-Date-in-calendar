const express = require('express');
const router = express.Router();
const meetController = require('../controllers/meetController');

// Authentication routes
router.get('/auth', meetController.getAuthUrl);
router.get('/auth/callback', meetController.handleAuthCallback);

// Meeting routes
router.post('/create-meeting', meetController.createMeeting);

// Serve frontend
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'meet.html'));
});

module.exports = router;