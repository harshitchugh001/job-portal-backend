const JobProfile = require('../model/jobs');

exports.addJob = async (req, res) => {
    console.log("hlo");
  try {
    const {  jobTitle, companyName, location, description } = req.body;

   
    const newJob = new JobProfile({
      jobId:Math.floor(10000000 + Math.random() * 90000000),
      jobTitle,
      companyName,
      location,
      description,
    });

    
    await newJob.save();

    res.status(201).json({ message: 'Job added successfully', job: newJob });
  } catch (error) {
    console.error('Error adding job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getJob = async (req, res) => {
  try {
    const { jobId } = req.params;

    
    const job = await JobProfile.findOne({ jobId });

    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.status(200).json({ job });
  } catch (error) {
    console.error('Error getting job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.getAllJobs = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1; 
      const limit = parseInt(req.query.limit) || 10; 
      const skipIndex = (page - 1) * limit; 
  
      
      const jobs = await JobProfile.find({}, { jobTitle: 1, jobId: 1,companyName:1, location: 1 })
        .skip(skipIndex)
        .limit(limit);
      const totalJobs = await JobProfile.countDocuments();
  
      const totalPages = Math.ceil(totalJobs / limit);
  
      res.status(200).json({
        jobs,
        totalPages,
        currentPage: page,
        totalJobs,
      });
    } catch (error) {
      console.error('Error getting jobs:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  