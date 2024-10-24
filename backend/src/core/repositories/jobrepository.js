const job = require('../domain/job');
const Job = require('../domain/job');

const createJob = async (jobdata) => {
    const job = new Job(jobdata);
    return await job.save();
};

const getJobById = async (id) => {
    return await Job.findById(id);
};

const getAllJobs = async () => {
    return await Job.find({});
}
const updateJob = async (id, jobdata) => {
    return await Job.findByIdAndUpdate(id, jobdata, { new: true });
};

const deleteJob = async (id) => {
    return await Job.findByIdAndDelete(id);
};

module.exports = {
    createJob,
    getJobById,
    getAllJobs,
    updateJob,
    deleteJob
};