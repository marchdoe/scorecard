var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');

module.exports = function() {
  return gulp.src('./images/**/*.*')
      .pipe(imagemin({progressive: true}))
      .pipe(gulp.dest('./dist/images/'))
};