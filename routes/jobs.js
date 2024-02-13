const express = require('express');
const router = express.Router();

const {
    addJob,
    getJob,
    getAllJobs,
} = require('../controller/jobs');



router.post('/addjob', addJob);
router.get('/getjob', getJob);
router.get('/getalljob', getAllJobs);


module.exports = router;