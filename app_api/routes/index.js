var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

var ctrlMember = require('../controllers/member');
var ctrlAuth = require('../controllers/authentication');

// member
router.get('/members', ctrlMember.readAllMember);
router.get('/members/:memberid', ctrlMember.readOneMember);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login)

module.exports = router;