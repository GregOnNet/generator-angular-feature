'use strict';

var exec = require('child_process').exec;

module.exports = {

  isRepo : isRepo
};

function isRepo(callback) {

  exec('git status', function(error, stdout, stderr) {

    if(error || stderr)
      callback(false);
  });
}
