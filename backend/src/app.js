const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./infrastructure/db/mongoose');
const authRoutes = require('./api/routes/authroutes');

const app = express();
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
