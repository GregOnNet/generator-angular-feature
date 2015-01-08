'use strict';

var fs         = require('fs'),
    should     = require('should'),
    Handlebars = require('handlebars');

describe('Loading snippet templates', function() {

  describe('Reading the snippets directory', function(){

    it('should return a list of all snippet files', function() {

      fs.readdir('snippets', function(error, files) {

        files.length.should.eql(4);
      });
    });
  });

  describe('When compiling a snippet file', function() {

    var app       = { name : 'gregs-app', feature : 'login' },
        options   = { encoding: 'utf-8' },
        template,
        result;

    before(function(done) {

      fs.readFile('snippets/feature.js', options, function(error, data) {
        if (error) throw error;

        template = Handlebars.compile(data);
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
