// IMAGE
// https://github.com/sindresorhus/gulp-imagemin
var gulp    	= require('gulp'),
    imagemin 	= require('gulp-imagemin'),

    config  = require( '../config' ).image;

gulp.task('image', function() {
    gulp.src( config.src )
        .pipe( imagemin({
            progressive: true,
        }))
        .pipe( gulp.dest( config.dest + '/min/' ));
});