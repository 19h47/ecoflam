// WATCH
var gulp = require('gulp'),

	config = require('../config');

gulp.task('watch', function() {
    gulp.watch( config.sass.srcWatch, ['sass'] );
    gulp.watch( config.javascript.srcWatch, ['javascript'] );
    gulp.watch( config.svg.srcWatch, ['svg'] );
});