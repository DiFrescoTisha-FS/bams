const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./api/database/database.js');
const cloudinary = require('cloudinary').v2;
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./api/routes/routes.js');
const morgan = require('morgan');
const logger = require('./logger.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('./api/auth/auth.js');
const cors = require('cors');

dotenv.config({ path: path.resolve(__dirname, '.env.production') });

const app = express();
connectDB();

const port = process.env.PORT || 4008;

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true,
});

const allowedOrigins = [
    'http://localhost:5173',
    'https://bamvsthewrld.com',
    'https://bams.onrender.com',
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Ensure credentials are allowed
};

app.use(cors(corsOptions));

app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    ttl: 14 * 24 * 60 * 60 // 14 days
});

store.on('create', (sessionId) => {
    console.log('Session created:', sessionId);
});

store.on('touch', (sessionId) => {
    console.log('Session touched:', sessionId);
});

store.on('update', (sessionId) => {
    console.log('Session updated:', sessionId);
});

store.on('set', (sessionId) => {
    console.log('Session set:', sessionId);
});

store.on('destroy', (sessionId) => {
    console.log('Session destroyed:', sessionId);
});

app.use(session({
  name: 'sessionId', // Customize your session cookie name
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Ensure to use HTTPS in production
    sameSite: 'None', // Important for CORS requests
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  },
  store: store
}));

// // Session configuration
// app.use(session({
//   name: 'connect.sid', // This should match the cookie name expected by the client
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production', // Ensure to use HTTPS in production
//     sameSite: 'None', // Important for CORS requests
//     maxAge: 1000 * 60 * 60 * 24 // 1 day
//   },
//   store: MongoStore.create({
//     mongoUrl: process.env.MONGO_URI,
//     ttl: 14 * 24 * 60 * 60 // 14 days
//   })
// }));

app.use(passport.initialize());
app.use(passport.session());

// Define API routes before serving static files
app.use('/', routes);

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// Conditional middlewares and settings for production
if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet());
}

// Error handler
function errorHandler(err, req, res, next) {
    logger.error(`Error: ${err.message}`);
    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            status: err.status || 500,
        },
    });
}

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});
