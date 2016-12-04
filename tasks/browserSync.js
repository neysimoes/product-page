'use strict';

module.exports = function(gulp) {
  let browserSync   = require('browser-sync').create();

  let tasks = {
    init: function(watch) {
      browserSync.init({
        notify: true,
        server: {
            baseDir: "./"
        }
      });
      watch();
    },

    reload: function() {
      browserSync.reload();
    }

  };

  return tasks;
};
