var mongoose = require('mongoose');
var readLine = require('readline');
var dbURI = 'mongodb://localhost/s2cLab'
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

// sigint event
if( process.platform ==='win32' || process.platform ==='win64') {
    var rl = readLine.createInterface ({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("SIGINT", function () {
      process.emit ("SIGINT");
    });
}

// 닫는 메소드
var gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};

// app 종료
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});

require('./member');
require('./users');