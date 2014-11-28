'use strict';

var gulp  = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('default', function() {
  
  return gulp
    .src('test/*specs.js', { read:false })
    .pipe(mocha({ reporter: 'nyan' }));
});
