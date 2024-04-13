// controllers/jobController.js
const Job = require('../models/Job');

exports.addJob = async (req, res) => {
  try {
    const { companyName, jobTitle, description, salary } = req.body;
    const newJob = new Job({
      companyName,
      jobTitle,
      description,
      salary
    });

    await newJob.save();
    res.status(201).send({ message: "Job created successfully", job: newJob });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.getJobs = async (req, res) => {
    try {
      const jobs = await Job.find({});  // Fetch all jobs from the database
      res.status(200).json(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      res.status(500).send('Server error while fetching jobs');
    }
};
