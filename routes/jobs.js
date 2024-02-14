const express = require('express');
const router = express.Router();

const {
    addJob,
    getJob,
    getAllJobs,
    generatelink,
    referalbylink,
} = require('../controller/jobs');



router.post('/addjob', addJob);
router.get('/getjob', getJob);
router.get('/getalljob', getAllJobs);
router.post('/generatejoblink',generatelink);
router.get('/referal',referalbylink);


module.exports = router;