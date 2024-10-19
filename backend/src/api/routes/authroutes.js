const express = require('express');
const router = express.Router();
const { register , login  , refresh} = require('../controllers/authcontroller');


router.post('/register', register);
router.post('/login', login);
router.get('/refresh', refresh);

module.exports = router;
