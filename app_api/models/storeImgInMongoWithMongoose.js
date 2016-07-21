var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');

// img path
var imgPath = './public/images/member';

// connect to mongo
mongoose.connect('localhost', 'store');

// example schema
var schema = new mongoose.Schema({
    img: { data: Buffer, contentType: String }
});

// our model
var Imgstore = mongoose.model('Imgstores', schema);

mongoose.connection.on('open', function () {
  console.error('mongo is open');

  // empty the collection
  Imgstore.remove(function (err) {
    if (err) {
      throw err;
    }
    console.error('removed old docs');
    // store an img in binary in mongo
    var imageStore = new Imgstore;
    imageStore.img.data = fs.readFileSync(imgPath);
    imageStore.img.contentType = 'image/jpg';
    imageStore.save(function (err, imageStore) {
      if (err) throw err;
      console.error('saved img to mongo');
    });
  });
});