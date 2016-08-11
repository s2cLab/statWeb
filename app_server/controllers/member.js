var  request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};

var renderMember = function(req, res, responseBody) {
  var message;
  if( !(responseBody instanceof Array) ) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "member가 없습니다.";
    }
  }   
  console.log()
    res.render('member-list', {
      title: 'Members',
      pageHeader:{
        title : 'S2C Lab Member',
        strapline : '전북대학교 통계학과'
      },
      members: responseBody,
      message: message
		});
};

var _showError = function (req, res, status, body) {
  var title, content;
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear. Looks like we can't find this page. Sorry.";
  } else if (status === 500) {
    title = "500, internal server error";
    content = "How embarrassing. There's a problem with our server.";
  } else {
    title = status + ", something's gone wrong";
    content = "Something, somewhere, has gone just a little bit wrong.";
  }
  res.status(status);
  res.render('generic-text', {
    title : title,
    content : content
  });
};

module.exports.memberList = function(req, res){
  var requestOptions, path;
  path = '/api/members';
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {},
    qs : {}
  };
  request (
    requestOptions,
    function(err, response, body) {
      if (response.statusCode === 200) {
        renderMember(req, res, body);
      } else {
        _showError(req, res, response.statusCode);
      }
    }
  );
};

/* POST 'insert Img' part */
module.exports.insertImg = function(req, res){
  var requestOptions, path, memberId, postdata;
  memberId = req.params.memberId;
  path = "/api/members/" + memberId;
  postdata = {
    data: req.body.pic,
    contentType: 'image/jpeg'
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  console.log(postdata);
  if (!postdata.data) {
    res.send("there is no submitted picture");
  } else {
    request(
      requestOptions,
      function(err, response, body) {
        if (response.statusCode === 201) {
          console.log("status code " + response.statusCode);
        } else if (response.statusCode === 400) {
          console.log("status code " + response.statusCode);
        } else {
          res.send("image update success");
        }
      }
    );
  }
};


