const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: false,
  },
  accessToken: {
    type: String,
    required: false,
  },
  refreshToken: {
    type: String,
    required: false,
  },
  expiration: {
    type: Date,
    required: false,
  },
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
