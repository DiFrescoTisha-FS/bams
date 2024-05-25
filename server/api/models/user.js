const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  tokens: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Token',
    },
  ],

    agreedToTerms: {
      type: Boolean,
      default: false,
    },
});

module.exports = mongoose.model('User', userSchema);
