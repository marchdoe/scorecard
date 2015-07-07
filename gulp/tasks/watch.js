var gulp   = require('gulp');

module.exports = function() {
  gulp.task('watch', function() {
    gulp.watch('./src/**/*.html', ['html-include']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/images/**/*', ['minify:images']);
  });
};