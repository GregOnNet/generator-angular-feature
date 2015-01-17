'use strict';

var fs = require('fs');

module.exports = {

  parse : parse
};

function parse(argv, callback) {

  var error,
      app,
      feature,
      validationError = catchError(argv);

  if(validationError)
    callback(validationError, undefined);

  else {

    var params = argv[2].split('.');

    var app = {
      name    : params[0].replace(/\s+/g, ''),
      feature : params[1].replace(/\s+/g, '')
    };

    fs.exists(app.name + '.' + app.feature, function(feature_exists) {

      if (feature_exists)
        error = new Error('This feature already exists.');

      callback(error, app);
    });
  }
}

function catchError(argv) {

  var params  = argv || new Array(),
      appFeatureCombo;

  if (!params[2])
    return new Error('Please specify a valid name for your feature!');

  if (params[2].indexOf('.') === -1)
    return new Error('Please provide the app- and feature-name separated by ".": app.feature');

  appFeatureCombo = params[2].split('.');

  if(!appFeatureCombo[0])
    return new Error('Please specify a valid app name');

  if(!appFeatureCombo[1])
    return new Error('Please specify a valid feature name');
}
