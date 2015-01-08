'use strict';

var fs      = require('fs'),
    path    = require('path'),
    options = { encoding: 'utf-8' };

module.exports = {

  load : load
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
