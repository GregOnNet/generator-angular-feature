'use strict';

var exec    = require('child_process').exec,
    fs      = require('fs'),
    path    = require('path'),
    mkdirp  = require('mkdirp'),
    feature = process.argv[2];

// creating feature root directory
mkdirp(feature, handleCreationError);

// creating feauter branch
exec('git checkout -b feature/' + feature);

// creating angular-module
fs.writeFile(feature + '/' + feature + 'module.js', 'module', handleCreationError);

// creating route configuration of module
fs.writeFile(feature + '/' + feature + 'routes.js', 'routes', handleCreationError);

// creating controller of module
fs.writeFile(feature + '/' + feature + '.js', 'controller', handleCreationError);

// creating html template of module
fs.writeFile(feature + '/' + feature + '.html', 'template', handleCreationError);

function handleCreationError(error) {
  if (error) console.log(error);
}
