var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlAbout = require('../controllers/about');
var ctrlMember = require('../controllers/member');

/* GET home page. */
router.get('/', ctrlHome.home);
/* about */
router.get('/aboutS2C', ctrlAbout.aboutS2C);
router.get('/contactUS', ctrlAbout.contactUS);
/* member */
router.get('/member', ctrlMember.member);

module.exports = router;