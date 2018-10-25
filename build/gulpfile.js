'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('cssmin', function() {
  return gulp
    .src('../src/style/style.less')
    .pipe(cssmin())
    .pipe(gulp.dest('../lib/lib/style'));
});
gulp.task('compile', function() {
  return gulp
    .src('../src/style/**/*.less')
    .pipe(less())
    .pipe(
      autoprefixer({
        browsers: ['ie > 9', 'last 2 versions'],
        cascade: false
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest('../lib/lib/style'));
});

gulp.task('build', ['cssmin', 'compile']);
