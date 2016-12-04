'use strict';

module.exports = function(gulp) {
  let htmlmin = require('gulp-htmlmin');

  let tasks = {
    min: function(sources, destinyDir) {
      gulp.src(sources)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(destinyDir))
    }

  };

  return tasks;
};
