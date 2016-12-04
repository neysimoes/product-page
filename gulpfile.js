'use strict';
let gulp          = require('gulp'),
    styles        = require('./tasks/styles')(gulp),
    browserSync   = require('./tasks/browserSync')(gulp),
    image         = require('./tasks/images')(gulp),
    html          = require('./tasks/html')(gulp),
    javascript    = require('./tasks/javascript')(gulp);


gulp.task('browser-sync', ['img', 'css', 'html', 'js'], function() {
  let watch = function() {
    gulp.watch('src/sass/**/*.sass', ['css']);
    gulp.watch('src/index.html', ['html']).on('change', browserSync.reload);
    gulp.watch('dist/css/**/*.css').on('change', browserSync.reload);
  };
  browserSync.init(watch);
});

gulp.task('sass:app', styles.sass(
    'src/scss/app.scss', // souce
    'dist/css', // destiny
    'app.css'
  )
);
gulp.task('js:concat', ['js:min'], javascript.concat(
    'src/js/**/*.js', // souce
    'src/js', // destiny
    'app.js'
  )
);

gulp.task('js:min', javascript.min(
    'src/js/app.js', // source
    'dist/js/'
  )
);

gulp.task('img', image.min(
    'src/assets/*', // souce
    'dist/assets' // destiny
  )
);

gulp.task('html', html.min(
    'src/**/*.html', // souce
    './' // destiny
  )
);

gulp.task('default', ['browser-sync']);
gulp.task('js', ['js:concat']);
gulp.task('css', ['sass:app'], styles.css('dist/css/app.css', 'dist/css/'));
