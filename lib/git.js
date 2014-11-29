'use strict';

var exec = require('child_process').exec;

module.exports = {

  isRepo : function isRepo() {

    exec('git status', handleGitExitStatus);
  }
};

function handleGitExitStatus (error, stdout, stderr) {
  console.log(stderr);
}
