'use strict';

var fs     = require('fs'),
    should = require('should');

describe('Loading snippet templates', function() {

  describe('When loading a snippet file', function() {

    it('should return its content', function() {
      var options = { encoding: 'utf-8' };
      fs.readFile('snippets/feature.js', options, function(error, data) {
        if (error) throw error;

        console.log(data);
      });
    });
  });
});
