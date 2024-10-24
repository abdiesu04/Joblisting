const jobUsecase  = require('../../core/usecases/jobusecase');

const createJob = async (req, res) => {
    try {
        await jobUsecase.createJob(req.body);
        res.status(201).json({ message: 'Job Created' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getAllJobs  = async (req , res) => {
    try {
        const jobs = await jobUsecase.getAllJobs();
        res.status(200).json({ jobs, message: 'Jobs fetched' });
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

const getJobById = async (req, res) => {
    try {
        const job = await jobUsecase.getJobById(req.params.id);
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateJob = async (req, res) => {
    try {
        await jobUsecase.updateJob(req.params.id, req.body);
        res.status(200).json({ message: 'Job Updated' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteJob = async (req , res) => {
    try {
        await jobUsecase.deleteJob(req.params.id) 
        res.status(200).json({message: 'Job Deleted'})
    } catch (error){
        res.status(400).json({error : error.message})
    }
}


module.exports  = {
    createJob , 
    getAllJobs , 
    getJobById ,
    updateJob ,
    deleteJob

}