var express = require('express');
var router = express.Router();
var ctrlMember = require('../controllers/member');

// member
router.get('/members', ctrlMember.readAllMember);
router.get('/members/:memberid', ctrlMember.readOneMember);
router.post('/members/:memberId', ctrlMember.createImg);
router.get('/image/:memberId', ctrlMember.displayImg);

module.exports = router;