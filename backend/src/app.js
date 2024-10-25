const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./infrastructure/db/mongoose');
const authRoutes = require('./api/routes/authroutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
connectDB();


// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
