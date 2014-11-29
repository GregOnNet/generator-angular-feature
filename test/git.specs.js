'use strict';

var git    = require('../lib/git'),
    should = require('should');

describe('Git handle branching', function() {

  describe('If no git repository is initialized', function() {

    var projectDir = process.cwd();
    var toNoGitRepository    = '../';

    before(function() {

      process.chdir(toNoGitRepository);
    });

    after(function() {

      process.chdir(projectDir);
    });

    it('should not create a branch', function() {
      git.isRepo(function(isRepo) {

        isRepo.should.be.false;
      });
    });
  });
});
