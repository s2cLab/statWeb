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
  memberImgPath: String
});

mongoose.model('Member', memberSchema);