const express = require('express');
const router = express.Router();
const authController = require('../controllers/authProvider');
const { register , login  , refresh} = require('../controllers/authcontroller');
const jobController  = require('../controllers/jobController')


router.post('/register', register);
router.post('/login', login);
router.get('/refresh', refresh);
router.post('/createjob' , jobController.createJob)
router.get('/getalljobs' , jobController.getAllJobs)
router.get('/getbyid/:id', jobController.getJobById)
router.delete('deletejob/:id' , jobController.deleteJob)
router.put('updatejob:/id' , jobController.updateJob)
module.exports = router;
