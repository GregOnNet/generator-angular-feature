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
                     .map(cleanUpBranchName)
                     .filter(removeEmptyOutput);

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

function cleanUpBranchName(branch) {

  return branch.replace('* ', '');
}

function removeEmptyOutput(branch) {

  return (branch && branch.length > 0);
}
