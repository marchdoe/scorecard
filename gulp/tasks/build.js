var gulp = require('gulp');

module.exports = function() {
  gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/images/'));
};