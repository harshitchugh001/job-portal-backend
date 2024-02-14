const express = require('express');
const router = express.Router();

const {
    addJob,
    getJob,
    getAllJobs,
    generatelink,
} = require('../controller/jobs');



router.post('/addjob', addJob);
router.get('/getjob', getJob);
router.get('/getalljob', getAllJobs);
router.get('/generatejoblink',generatelink)


module.exports = router;