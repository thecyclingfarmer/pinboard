var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({ scope: ['dependencies'] });

//DEVELOP
gulp.task('default', require('./config/tasks/default')(gulp, plugins));

//BUILD
gulp.task('build', require('./config/tasks/build')(gulp, plugins));

//JS: BUILD
gulp.task('js', require('./config/tasks/js')(gulp, plugins));

//SASS
gulp.task('sass', require('./config/tasks/sass')(gulp, plugins));

//SERVE
gulp.task('serve', require('./config/tasks/serve')(gulp, plugins));
