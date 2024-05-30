const express = require('express');
const passport = require('../auth/auth');
const CommentRating = require('../models/commentRating');
const router = express.Router();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

router.get('/status', (req, res) => {
  console.log('In /status route:', req.sessionID, req.session);
  console.log('Session ID:', req.sessionID);
  console.log('Session:', req.session);
  console.log('Authenticated:', req.isAuthenticated());
  console.log('User:', req.user);
  if (req.isAuthenticated()) {
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
});

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
  failureRedirect: '/',
  successRedirect: FRONTEND_URL,
}));

router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    console.log('After logout:', req.sessionID, req.session);
    res.redirect('/');
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
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

router.get('/', (req, res) => {
  res.send('Server is up and running!');
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

module.exports = router;
