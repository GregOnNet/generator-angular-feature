'use strict';

var git     = require('./lib/git'),
    feature = require('./lib/feature'),
    fs      = require('fs'),
    path    = require('path'),
    mkdirp  = require('mkdirp');

feature.parse(process.argv, completed);

function completed(error, name) {
  if (error) throw(error);

  git.branch(name, function() {

    // creating feature root directory
    mkdirp(name, handleCreationError);

    // creating angular-module
    fs.writeFile(name + '/' + name + '.module.js', 'module', handleCreationError);

    // creating route configuration of module
    fs.writeFile(name + '/' + name + '.routes.js', 'routes', handleCreationError);

    // creating controller of module
    fs.writeFile(name + '/' + name + '.js', 'controller', handleCreationError);

    // creating html template of module
    fs.writeFile(name + '/' + name + '.html', 'template', handleCreationError);
  });
}

function handleCreationError(error) {
  if (error) console.log(error);
}
