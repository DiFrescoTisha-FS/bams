const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./api/database/database.js');
const mongoose = require('mongoose');
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

console.log('Cloudinary Name:', process.env.CLOUDINARY_NAME);

const app = express();
connectDB();

const port = process.env.PORT || 4008;

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
    credentials: true,
};

app.use(cors(corsOptions));
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session configuration
app.use(
    session({
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24, // 24 hours
            sameSite: 'lax',
        },
    })
);

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

