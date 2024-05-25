const mongoose = require('mongoose');

const commentRating = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Ensure this matches the name of your User model
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

const CommentRating = mongoose.model('CommentRating', commentRating);

module.exports = CommentRating;
