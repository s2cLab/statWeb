var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlAbout = require('../controllers/about');
var ctrlMember = require('../controllers/member');
var ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlOthers.angularApp);

/* about */
router.get('/aboutS2C', ctrlAbout.aboutS2C);

/* member */
router.get('/members', ctrlMember.memberList);

module.exports = router;