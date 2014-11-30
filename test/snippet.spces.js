'use strict';

var fs         = require('fs'),
    should     = require('should'),
    Handlebars = require('handlebars');

describe('Loading snippet templates', function() {

  describe('When loading a snippet file', function() {

    var featureName = { 'feature' : 'login' };
    var options = { encoding: 'utf-8' };
    var template, result;

    it('should return its content', function() {

      fs.readFile('snippets/feature.js', options, function(error, data) {
        if (error) throw error;

        template = Handlebars.compile(data);
        result   = template(featureName);

        result.should.containEql('login');
      });
    });
  });
});
