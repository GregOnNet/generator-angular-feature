'use strict';

var fs         = require('fs'),
    should     = require('should'),
    Handlebars = require('handlebars'),
    snippet    = require('../lib/snippet');

describe('Loading snippet templates', function() {

  describe('Reading the snippets directory', function(){

    it('should return a list of all snippet files', function() {

      fs.readdir('snippets', function(error, files) {

        files.length.should.eql(4);
      });
    });
  });

  describe('When loading a snippet', function() {

    it('should return the name of the snippet', function() {

      snippet.load('snippets/feature.js', function(error, snippet) {

        snippet.name.should.eql('feature.js');
      });
    });

    it('should return the content of the snippet', function() {

      snippet.load('snippets/feature.js', function(error, snippet) {

        snippet.content.should.containEql('.controller(\'{{ feature }}\', {{ feature }});');
      });
    });
  });

  describe('When compiling a snippet file', function() {

    var app       = { name : 'gregs-app', feature : 'login' },
        options   = { encoding: 'utf-8' },
        template,
        result;

    before(function(done) {

      snippet.load('snippets/feature.js', function(error, snippet) {
        if (error) throw error;

        template = Handlebars.compile(snippet.content);
        result   = template(app);

        done();
      });

    });

    it('should replace {{ feature }} with the given feature name', function() {

        result.should.containEql('login');
    });

    it('should replace {{ name }} with the given app name', function() {

        result.should.containEql('gregs-app');
    });
  });
});
