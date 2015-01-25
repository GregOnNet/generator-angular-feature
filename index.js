'use strict';

var git     = require('./src/lib/git'),
    feature = require('./src/lib/feature'),
    snippet = require('./src/lib/snippet'),
    fs      = require('fs'),
    path    = require('path'),
    mkdirp  = require('mkdirp');

feature.parse(process.argv, completed);

function completed(error, app) {
  if (error) throw(error);

  git.branch('feature/' + app.featureName, function() {

    fs.readdir('src/snippets', function(error, files) {

      files.forEach(function(file) {

        snippet.load('src/snippets/' + file, function(error, s) {
          if (error) throw error;

          var result = snippet.compile(s, app);

          snippet.save(result, app, function(error) {
            if (error) throw error;
          });
        });
      });
    });
  });
}
