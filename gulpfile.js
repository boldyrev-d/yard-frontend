var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    notify = require("gulp-notify"),
    gulpStylelint = require('gulp-stylelint');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'src',
      index: 'complexes.html'
    },
    notify: false
  });
});

gulp.task('lint-css', function lintCssTask() {
  return gulp
    .src('src/**/*.css')
    .pipe(gulpStylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('src/*.html', browserSync.reload);
  gulp.watch('src/css/**/*.css', browserSync.reload);
});

gulp.task('default', ['watch']);
