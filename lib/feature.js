'use strict';

var fs = require('fs');

module.exports = {

  parse : parse
}

function parse(argv, callback) {

  var error,
      app,
      feature,
      params  = argv || new Array();

  var validationError = catchError(params);

  if(validationError)
    callback(validationError, undefined);

  else if (params[2]) {

    if (params[2].indexOf('.') === -1) {

      error = new Error('Please provide the app- and feature-name separated by ".": app.feature');
      callback(error, undefined);
    }

    var app = params[2].split('.');

    if(!app[0]) {

      error = new Error('Please specify a valid app name');
      callback(error, undefined);
    }
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

function catchError(params) {

  if (!params[2])
    return new Error('Please specify a valid name for your feature!');
}
