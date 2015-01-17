'use strict';

var git    = require('../src/lib/git'),
    exec = require('child_process').exec;
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

      git.branch('', function(branches) {

        branches.length.should.equal(1);
      });
    });

    it('should contain the branch "master"', function() {

      git.branch('', function(branches) {

        branches.should.containEql('master');
      });
    });
  });
});

describe('Creating branches', function() {

  describe('When a feature branch is created', function() {

    var featureName = 'user-dashboard';

    after(function() {
      exec('git checkout master')
      exec('git branch -d feature/' + featureName);
    });

    it('should be listed in the list of branches', function(done) {

      git.branch(featureName, function(branches) {

        branches.should.containEql('feature/' + featureName);
        done();
      });
    });
  });
});
