const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  companyName: { type: String, required: true, trim: true },
  jobTitle: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  salary: { type: String, required: true, trim: true }
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job;