const express = require('express');
const passport = require('../auth/auth');
const CommentRating = require('../models/commentRating');
const router = express.Router();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

router.get('/auth/status', (req, res) => {
  console.log('API is working');
  console.log("Checking authentication status");
  try {
    if (req.isAuthenticated()) {
      console.log("User is authenticated:", req.user);
      res.json({
        isAuthenticated: true,
        user: {
          id: req.user._id,
          name: req.user.name,
          avatar: req.user.picture,
        },
      });
    } else {
      res.json({ isAuthenticated: false });
    }
  } catch (error) {
    console.error('Error checking auth status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// This route triggers the login process
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/',
  successRedirect: FRONTEND_URL,
}));

router.get('/auth/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send('Failed to log out.');
      }
      res.clearCookie('connect.sid'); // Clear the cookie that was used to handle the session
      res.redirect('/'); // Optionally redirect to the homepage or login page
    });
  });
});

router.post("/comment-rating", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).send("User not authenticated");
  }

  try {
    const newCommentRating = new CommentRating({
      user: req.user._id,
      comment: req.body.comment,
      rating: req.body.rating,
    });

    const savedCommentRating = await newCommentRating.save();
    res.status(201).json(savedCommentRating);
  } catch (error) {
    console.error("Error saving comment and rating:", error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.get('/', (req, res) => {
  res.send('Server is up and running!');
});

router.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

module.exports = router;
