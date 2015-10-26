'use strict';

var config = require('./config');

var watch = {
  scripts: {
    files: [config.src + '/htdocs/js/**/*.js'],
    tasks: ['concurrent:scripts'],
    options: {
      livereload: config.liveReloadPort
    }
  },
  scss: {
    files: [config.src + '/htdocs/css/**/*.scss'],
  },
  tests: {
    files: [config.test + '/*.html', config.test + '/**/*.js'],
    tasks: ['concurrent:tests']
  },
  livereload: {
    options: {
      livereload: config.liveReloadPort
    },
    files: [
      config.src + '/htdocs/**/*.html',
      config.src + '/htdocs/css/**/*.css',
      config.src + '/htdocs/img/**/*.{png,jpg,jpeg,gif}',
      '.tmp/css/**/*.css'
    ]
  },
  gruntfile: {
    files: ['Gruntfile.js'],
    tasks: ['jshint:gruntfile']
  }
};

module.exports = watch;
