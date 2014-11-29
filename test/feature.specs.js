'use strict';

var feature = require('../lib/feature');
var should = require('should');

describe('Checking command line argument for name of feature', function() {

  describe('If no feature name is given', function() {

    var argv = undefined;

    it('should throw an error', function() {

      (function() {

        feature.parse(argv);
      })
        .should
        .throw('Please specify a valid name for your feature!')
    });
  });

  describe('If a valid feature name is given', function() {

    var argv = ['_', 'app-path/', 'feature-a'];

    it('should return the name of the parsed feature name', function() {

      feature.parse(argv).should.eql('feature-a');
    });
  });

  describe('If the feature name contains "spaces"', function() {

    var argv = ['_', 'app-path/', 'f e a t u r e-a'];

    it('should delete them', function() {

      feature.parse(argv).should.eql('feature-a');
    });
  })
});
