var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    notify = require("gulp-notify");

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'src',
      index: 'complexes.html'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/css/**/*.css', browserSync.reload);
});

gulp.task('default', ['watch']);
