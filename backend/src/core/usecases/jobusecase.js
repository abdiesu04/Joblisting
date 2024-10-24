const jobRepo = require('../repositories/jobrepository');

const createJob = async (jobData) => {
    if (!jobData.title || !jobData.description || !jobData.company || !jobData.location || !jobData.salary) {
        throw new Error('Missing required fields');
    }

    try {
        return await jobRepo.createJob(jobData);
    } catch (error) {
        throw new Error('Job Creation Failed: ' + error.message);
    }
}

const getJobById = async (jobId) => {
    try {
        return await jobRepo.getJobById(jobId); 
    }   
    catch (error) {
        throw new Error('Job not found: ' + error.message);
    }
}

const getAllJobs = async () => {
    try {
        return await jobRepo.getAllJobs();
    } catch (error) {
        throw new Error('Error fetching jobs: ' + error.message);
    }
}

const updateJob = async (jobId, jobData) => {
    try {
        return await jobRepo.updateJob(jobId, jobData);
    } catch (error) {
        throw new Error('Error updating job: ' + error.message);
    }
}

const deleteJob = async (jobId) => {
    try {
        return await jobRepo.deleteJob(jobId);
    } catch (error) {
        throw new Error('Error deleting job: ' + error.message);
    }
}

module.exports = {
    createJob,
    getJobById,
    updateJob , 
    getAllJobs,
    deleteJob,
}

