module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('serve', function () {
        gulp.watch(['app/frontend/**/*.js', '*.html', 'app/frontend/**/*.html', 'app/frontend/**/*.scss'], ['build']);
    });
  };
};
