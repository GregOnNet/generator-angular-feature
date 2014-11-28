'use strict';

var fs      = require ('fs'),
    path    = require('path'),
    mkdirp  = require('mkdirp'),
    branch  = require('nodegit').Branch,
    feature = process.argv[2];

    console.log(branch);

// creating feature root directory
mkdirp(feature, handleCreationError);

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
