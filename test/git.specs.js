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

    it('should return false', function() {

      git.isRepo(function(isRepo) {

        isRepo.should.be.false;
      });
    });
  });

  describe('If a git repository is initialized', function() {

    it('should return true', function() {

      git.isRepo(function(isRepo) {

        isRepo.should.be.true;
      });
    });
  });
});

describe('Listing branches', function() {

  describe('Listing branches of a repository', function() {

    it('should return an array of local branches', function() {

      git.branch(function(branches) {

        branches.length.should.be.above(1);
      });
    });

    it('should contain the branch "master"', function() {
      git.branch(function(branches) {

        branches[0].should.eql('master');
      });
    });
  });
});
