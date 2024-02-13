const express = require('express');
const router = express.Router();

const {
    addJob,
    getJob,
    getAllJobs,
} = require('../controller/referral');



router.post('/addjob', addJob);
router.get('/getjob', getJob);
router.get('/getalljob', getAllJobs);


module.exports = router;