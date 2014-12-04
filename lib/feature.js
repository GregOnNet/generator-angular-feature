'use strict';

var fs = require('fs');

module.exports = {

  parse : parse
}

function parse(argv, callback) {

  var error,
      feature,
      params  = argv || new Array();

  if (!params[2]) {

    error = new Error('Please specify a valid name for your feature!');
    callback(error, undefined);
  }
  else {

    feature = params[2].replace(/\s+/g, '');
    fs.exists(feature, function(feature_exists) {

      if (feature_exists)
        error = new Error('This feature already exists.');

        callback(error, feature);
    });
  }
}
