'use strict';

var fs         = require('fs'),
    should     = require('should'),
    snippet    = require('../src/lib/snippet');

describe('Loading snippet templates', function() {

  describe('Reading the snippets directory', function(){

    it('should return a list of all snippet files', function() {

      fs.readdir('src/snippets', function(error, files) {

        files.length.should.eql(4);
      });
    });
  });

  describe('When loading a snippet', function() {

    it('should return the name of the snippet', function() {

      snippet.load('src/snippets/feature.js', function(error, snippet) {

        snippet.name.should.eql('feature.js');
      });
    });

    it('should return the content of the snippet', function() {

      snippet.load('src/snippets/feature.js', function(error, snippet) {

        snippet.content.should.containEql('.controller(\'{{ feature }}\', {{ feature }});');
      });
    });
  });

  describe('When compiling a snippet file', function() {

    var app       = { name : 'gregs-app', feature : 'login' },
        options   = { encoding: 'utf-8' },
        result;

    before(function(done) {

      snippet.load('src/snippets/feature.js', function(error, s) {
        if (error) throw error;

        result = snippet.compile(s, app);

        done();
      });

    });

    it('should replace {{ feature }} with the given feature name', function() {

      result.content.should.containEql('login');
    });

    it('should replace {{ name }} with the given app name', function() {

      result.content.should.containEql('gregs-app');
    });

    it('should replace "feature" with the name of the feature', function() {

      result.name.should.eql('login.js');
    });
  });

  describe('When writing a snippet file', function() {

    it('should be placed in a directory named like the feature', function() {


    })
  });
});
