var mongoose = require('mongoose');
var Mem = mongoose.model('Member');

var sendJsonResponse = function(res, status, content) {
	res.status(status);
	res.json(content);
};

module.exports.readAllMember = function(req, res){
		Mem
			.find()
			.exec( function(err, members) {
        if (err) {
					sendJsonResponse(res, 404, err);
					return;
				}
				sendJsonResponse(res, 200, members);
			});
};

module.exports.readOneMember = function(req, res){
	if (req.params && req.params.memberid) {
		Mem
			.findById(req.params.memberid)
			.exec( function(err, member) {
				if(!member){
					sendJsonResponse(res, 404, { "message" : "memberid가 없습니다." } );
					return;
				}
				else if (err) {
					sendJsonResponse(res, 404, err);
					return;
				}
				sendJsonResponse(res, 200, member);
			});
	}
	else {
		sendJsonResponse(res, 404, { "message" : "요청에 memberid가 없습니다." } );
	}
};

// post insertImage
module.exports.createImg = function(req, res){
  if (!req.params.memberId) {
    sendJsonResponse(res, 404, {
      "message": "Not found, memberId is required"
    });
    return;
  }
  var ID = new mongoose.Binary(req.body.data);
  var updateData = { img : { data: ID, contentType: req.body.contentType } };
  Mem
    .findByIdAndUpdate(req.params.memberId, { $set: updateData }, function (err, member) {
      if (err) {
        sendJsonResponse(res, 404, err);
      } else {
        sendJsonResponse(res, 200, member);
      }
    });
};

module.exports.displayImg = function(req, res){
	if (req.params && req.params.memberId) {
		Mem
			.findById(req.params.memberId)
			.exec( function(err, member) {
				if(!member){
					sendJsonResponse(res, 404, { "message" : "memberid가 없습니다." } );
					return;
				}
				else if (err) {
					sendJsonResponse(res, 404, err);
					return;
				}
				sendJsonResponse(res, 200, member.img);
			});
	}
	else {
		sendJsonResponse(res, 404, { "message" : "요청에 memberid가 없습니다." } );
	}
};
/*
var doAddReview = function(req, res, location) {
  if (!location) {
    sendJSONresponse(res, 404, "locationid not found");
  } else {
    location.reviews.push({
      author: req.body.author,
      rating: req.body.rating,
      reviewText: req.body.reviewText
    });
    location.save(function(err, location) {
      var thisReview;
      if (err) {
        sendJSONresponse(res, 400, err);
      } else {
        updateAverageRating(location._id);
        thisReview = location.reviews[location.reviews.length - 1];
        sendJSONresponse(res, 201, thisReview);
      }
    });
  }
};


module.exports.showImage = function(req, res){
  if (!req.params.memberId) {
    sendJsonResponse(res, 404, {
      "message": "Not found, memberId is required"
    });
    return;
  }
  Mem.findById(req.params.memberId, function (err, member) {
    if (err) return next(err);
    res.set('Content-Type', member.img.contentType);
    res.send( member.img.data );
  });
}*/