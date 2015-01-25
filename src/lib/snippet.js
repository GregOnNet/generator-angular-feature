'use strict';

var fs      = require('fs'),
    path    = require('path'),
    Handlebars = require('handlebars'),
    options = { encoding: 'utf-8' };

module.exports = {

  load    : load,
  compile : compile,
  save    : save
};

function load(filePath, callback) {

  fs.readFile(filePath, options, function(error, data) {
    if (error)
      callback(error);

    else {

      var snippet = {
        name    : path.basename(filePath),
        content : data
      };

      callback(undefined, snippet);
    }
  });
}

function compile(snippet, app) {

  var template = Handlebars.compile(snippet.content);

  return {
    name    : snippet.name.replace('feature', app.feature),
    content : template(app)
  }
}

function save(snippet, app, callback) {

  fs.exists(app.feature, function(exists) {

    if (exists)
      writeSnippet(snippet, app, callback);

    else
      fs.mkdir(app.feature, function(error) {

        if(error) {
          callback(error);
          return;
        }

        writeSnippet(snippet, app, callback);
      });
  });
}

function writeSnippet(snippet, app, callback) {

  fs.writeFile(app.feature + '/' + snippet.name, snippet.content, function (error) {

    callback(error);
  });
}
