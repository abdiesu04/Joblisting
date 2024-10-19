const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./infrastructure/db/mongoose');
const authRoutes = require('./api/routes/authroutes');
const cookieParser = require('cookie-parser');

const app = express();
connectDB();


// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
