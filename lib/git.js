'use strict';

var exec = require('child_process').exec;

module.exports = {

  branch : branch,
  isRepo : isRepo
};

function branch(branchName, callback) {

  var branches = [];

  isRepo(function(isRepo) {

    if (isRepo) {
      if(branchName)
        exec('git branch feature/' + branchName);

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

  return branch
           .replace('* ', '')
           .trim();
}

function removeEmptyOutput(branch) {

  return (branch && branch.length > 0);
}
