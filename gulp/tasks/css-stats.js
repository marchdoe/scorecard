var gulp   = require('gulp');
var parker = require('parker');
var debug  = require('gulp-debug');

module.exports = function() {
  gulp.task('parker', function() {
    return gulp.src('./build/transparency.css')
       .pipe(debug())
       .pipe(parker({
          file: 'report.md',
          title: 'Gulp test report',
          metrics: [
              "TotalRules",
              "TotalStylesheets"
          ]}));
  });
};
