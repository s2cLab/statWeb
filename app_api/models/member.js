var mongoose = require('mongoose');

var memberSchema = new mongoose.Schema({
	name : String,
	position: String,
	address : String,
	affiliation : String,
	PhoneNumber: String,
	webMail : String,
  homepageSite : String,
	homepageName : String,
  img: { data: Buffer, contentType: String }
});

mongoose.model('Member', memberSchema);