'use strict';

module.exports = function(gulp) {
  let uglify = require('gulp-uglify'),
      concat = require('gulp-concat');

  let tasks = {
    min: function(sources, destinyDir) {
      gulp.src(sources)
        .pipe(uglify())
        .pipe(gulp.dest(destinyDir))
    },
    concat: function (sources, destinyDir, destinyFile) {
      return function() {
        return gulp.src(sources)
          .pipe(concat(destinyFile, { newLine: ';' }))
          .pipe(gulp.dest(destinyDir))
      }
    }

  };

  return tasks;
};
