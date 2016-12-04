'use strict';

module.exports = function(gulp) {
  let imagemin   = require('gulp-imagemin');

  let tasks = {
    min: function(sources, destinyDir) {
      gulp.src(sources)
        .pipe(imagemin())
        .pipe(gulp.dest(destinyDir))
    }

  };

  return tasks;
};
