const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});


const JobProfile = mongoose.model('job', jobSchema);

module.exports = JobProfile;