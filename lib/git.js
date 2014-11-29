'use strict';

var exec = require('child_process').exec;

module.exports = {

  branch : branch,
  isRepo : isRepo
};

function branch(callback) {

  var branches = [];

  isRepo(function(isRepo) {

    if (isRepo) {

      exec('git branch', function(error, stdout, stderr) {

        branches = stdout
                     .split('\n')
                     .map(function(branch){

                       return branch.replace('* ', '');
                     })
                     .filter(function(branch) {

                       return (branch && branch.length > 0);
                     });

        callback(branches);
      });
    }
  });
}

function isRepo(callback) {

  exec('git status', function(error, stdout, stderr) {

    if(error || stderr)
      callback(false);
    else
      callback(true);
  });
}
