'use strict';

var config = require('./config');

var watch = {
  css: {
    files: [
      config.src + '/htdocs/css/**/*.css'
    ],
    tasks: [
      'postcss:dev'
    ]
  },

  gruntfile: {
    files: [
      'Gruntfile.js',
      'gruntconfig/**/*.js'
    ],
    options: {
      reload: true
    },
    tasks: [
      'jshint:gruntfile'
    ]
  },

  livereload: {
    files: [
      config.build + '/' + config.src + '/htdocs/css/**/*',
      config.build + '/' + config.src + '/htdocs/images/**/*',
      config.build + '/' + config.src + '/htdocs/img/**/*',
      config.build + '/' + config.src + '/htdocs/eq/MapViewDependencies.js',
      config.build + '/' + config.src + '/htdocs/js/index.js',
      config.build + '/' + config.src + '/htdocs/*.*',
      '!' + config.build + '/' + config.src + '/htdocs/*.inc.*'
    ],
    options: {
      livereload: config.liveReloadPort
    }
  },

  scripts: {
    files: [
      config.src + '/htdocs/js/**/*.js'
    ],
    tasks: [
      'jshint:scripts',
      'requirejs:dev'
    ]
  },

  static: {
    files: [
      config.src + '/**/*',
      '!' + config.src + '/**/*.js',
      '!' + config.src + '/**/*.scss',
      '!' + config.src + '/**/*.css'
    ],
    tasks: [
      'copy:dev'
    ]
  },

  tests: {
    files: [
      config.test + '/*.html',
      config.test + '/**/*.js'
    ],
    tasks: [
      'copy:test',
      'requirejs:test'
    ]
  }
};

module.exports = watch;
