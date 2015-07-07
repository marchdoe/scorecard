var gulp   = require('gulp');
include    = require('gulp-html-tag-include');

module.exports = function() {
  gulp.task('html-include', function() {
      return gulp.src('./src/**/*.html')
          .pipe(include())
          .pipe(gulp.dest('./dist/'));
  });
};