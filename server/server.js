const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./api/database/database.js');
const mongoose = require('mongoose');
const helmet = require('helmet');
const routes = require('./api/routes/routes.js');
const morgan = require('morgan');
const logger = require('./logger.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('./api/auth/auth.js');
const cors = require('cors');

// Load environment variables based on the NODE_ENV
if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: path.resolve(__dirname, '../.env.production') });
} else {
  dotenv.config({ path: path.resolve(__dirname, '../.env.development') });
}

const app = express();
connectDB();

const port = process.env.PORT || 4008;

const allowedOrigins = [
  'http://localhost:5173',
  'https://bamvsthewrld.com',
  'https://wrld-of-bam-client.onrender.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session configuration
app.use(session({
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24, // 24 hours
    sameSite: 'lax'
  }
}));

app.use(passport.initialize());
app.use(passport.session());

// Conditional middlewares and settings for production
if (process.env.NODE_ENV === 'production') {
  const compression = require('compression');
  app.use(compression());
  app.use(helmet());

  // Serve static files from the 'dist' directory
  app.use(express.static(path.resolve(__dirname, '../client/dist')));

  // Catch-all handler to serve React's index.html for any other routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
  });
}

// Define your routes
app.use(routes);

// Test database endpoint
app.get('/test-db', async (req, res) => {
  try {
    const admin = new mongoose.mongo.Admin(mongoose.connection.db);
    const info = await admin.serverStatus();
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve database status', details: err });
  }
});

// Error handler
function errorHandler(err, req, res, next) {
  logger.error(`Error: ${err.message}`);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500
    }
  });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});
