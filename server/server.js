const express = require('express');
const session = require('express-session');
const passport = require('./api/auth/auth');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./api/database/database');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./api/routes/routes');
const morgan = require('morgan');
const logger = require('./logger');

const MongoStore = require('connect-mongo');

const cors = require('cors');

dotenv.config({ path: path.resolve(__dirname, '.env.production') });

const app = express();
connectDB();

const port = process.env.PORT || 4008;

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

// const store = MongoStore.create({
//     mongoUrl: process.env.MONGO_URI,
//     ttl: 14 * 24 * 60 * 60 // 14 days
// });
app.use((req, res, next) => {
    console.log('Before session middleware:', req.sessionID, req.session);
    next();
});
  
app.use(session({
  name: 'connect.sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 14 * 24 * 60 * 60, // 14 days
  }),
  cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'None', // Use 'Lax' for local development
      maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
}));

app.use((req, res, next) => {
    console.log('After session middleware:', req.sessionID, req.session);
    next();
  });

require('./api/auth/auth'); // Ensure this path initializes the Google strategy
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./api/routes/routes'); // Ensure this path is correct
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
    console.log('In root route:', req.sessionID, req.session);
    res.send('Server is up and running!');
  });

app.use((req, res, next) => {
    console.log('Session ID:', req.sessionID);
    next();
  });
  

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
    app.use(compression());
    app.use(helmet());
}

app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`);
});