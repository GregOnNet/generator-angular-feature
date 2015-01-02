'use strict';

var feature = require('../lib/feature'),
    should  = require('should'),
    rimraf  = require('rimraf'),
    mkdirp  = require('mkdirp');

describe('Checking command line argument for name of feature', function() {

  describe('If no feature name is given', function() {

    var argv = undefined;

    it('should throw an error', function() {

      feature.parse(argv, function(error, result) {

        error.message.should.eql('Please specify a valid name for your feature!');
      });
    });
  });

  describe('If a valid feature name is given', function() {

    var argv = ['_', 'app-path/', 'app.feature-a'];

    it('should return the name of the parsed feature name', function() {

      feature.parse(argv, function(error, result) {

        result.feature.should.eql('feature-a');
      });
    });

    it('should return the name of the parsed appp name', function() {

      feature.parse(argv, function(error, result) {

        result.name.should.eql('app');
      });
    });
  });

  describe('If the feature name contains "spaces"', function() {

    var argv = ['_', 'app-path/', 'app.f e a t u r e-a'];

    it('should delete them', function() {

      feature.parse(argv, function(error, result) {

        result.feature.should.eql('feature-a');
      });
    });
  });
});


describe('Cecking command line argument for name of the app', function() {

  describe('If no "." is given separating app name and feature name', function() {

    var argv = ['path', '_', 'no-dot-separated-app-feature-combination'];

    it('should throw an error', function() {

      feature.parse(argv, function(error, result) {

        error.message.should.eql('Please provide the app- and feature-name separated by ".": app.feature');
      });
    });
  });

  describe('If no app name is given', function() {

    var argv = ['path', '_', '.missing-app-name'];

    it('should throw an error', function() {

      feature.parse(argv, function(error, result) {

        error.message.should.eql('Please specify a valid app name');
      });
    });
  });
});

describe('Check for existing feature with the same name', function() {
  var featureName = 'app.user-dashboard';

  before(function() {

    mkdirp(featureName);
  });

  after(function() {

    rimraf(featureName, function() {});
  });

  describe('If a directory with the given feature name already exists', function() {

    var argv = ['_', 'app-path/', featureName];

    it('should throw an error', function() {

      feature.parse(argv, function(error, result) {

        error.message.should.eql('This feature already exists.');
      });
    });
  })
});
