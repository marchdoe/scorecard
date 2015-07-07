var gulp       = require('gulp');
var sass       = require('gulp-sass');
var scsslint   = require('gulp-scss-lint');
var plumber    = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');

var path = {
  styles: ['./src/scss/**/*.scss']
};

module.exports = function() {
  gulp.src(path.styles)
    .pipe(plumber())
    .pipe(scsslint({'config': './scss-lint.yml'}))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css/'));
};
