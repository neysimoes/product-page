'use strict';

module.exports = function(gulp) {
  let tasks             = {},
      changed           = require('gulp-changed'),
      concat            = require('gulp-concat'),
      cssnano           = require('gulp-cssnano'),
      postcss           = require('gulp-postcss'),
      sass              = require('gulp-sass'),
      pxtorem           = require('postcss-pxtorem'),
      autoprefixer      = require('autoprefixer'),
      mqpacker          = require('css-mqpacker'),
      chico             = require('chico');

  const supportedBrowsers = ['last 2 versions', 'Android >= 4', 'IE >= 8'],
        cssNanoConfig     = { zindex: false, minifyFontValues: false };

  tasks.sass = function (sources, destinyDir, output) {
    return function() {
      let config = {
        'includePaths': [chico()]
      }
      return gulp.src(sources)
        .pipe(sass(config))
        .pipe(postcss([
            pxtorem(),
            mqpacker(),
            autoprefixer({
              browsers: supportedBrowsers
            })
          ]))
          .pipe(concat(output))
          .pipe(gulp.dest(destinyDir));

    }
  }

  tasks.css = function (sources, destinyDir) {
    return function() {
      return gulp.src(sources)
        .pipe(changed('assets/scss/'))
        .pipe(cssnano())
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(destinyDir));
    }
  }

  return tasks;
};
