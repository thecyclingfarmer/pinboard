var runSequence = require('run-sequence');

module.exports = function (gulp, plugins) {
  return function () {
    gulp.task('default', function (cb) {
        runSequence(
            'build',
            'serve',
            cb
        );
    });
  };
};
