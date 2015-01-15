'use strict';

var fs      = require('fs'),
    path    = require('path'),
    Handlebars = require('handlebars'),
    options = { encoding: 'utf-8' };

module.exports = {

  load    : load,
  compile : compile
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
  return template(app);
}
