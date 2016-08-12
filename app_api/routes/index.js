var express = require('express');
var router = express.Router();
var ctrlMember = require('../controllers/member');

// member
router.get('/members', ctrlMember.readAllMember);
router.get('/members/:memberid', ctrlMember.readOneMember);

module.exports = router;