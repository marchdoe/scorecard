var gulp  = require('gulp');

// Tasks
//-----------------
gulp.task('build', require('./gulp/tasks/build'));
gulp.task('sass',  require('./gulp/tasks/sass'));
gulp.task('watch', require('./gulp/tasks/watch'));
gulp.task('serve', require('./gulp/tasks/serve'));
gulp.task('html-include', require('./gulp/tasks/html-tag-include'));

// Gulp Commands
//-----------------
gulp.task('default', ['build', 'sass', 'watch', 'html-include', 'serve']);