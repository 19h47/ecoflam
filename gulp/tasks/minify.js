// MINIFY JS AND CSS

var gulp            = require( 'gulp' ),
    nano            = require( 'gulp-cssnano' ),
    csso            = require( 'gulp-csso' ),
    sourcemaps      = require( 'gulp-sourcemaps' ),
    mmq             = require( 'gulp-merge-media-queries' ),
    rename          = require( 'gulp-rename' ),

    config          = require('../config').minify;

gulp.task('minify', ['sass'], function() {
    gulp.src( config.src )
        .pipe( 
            nano({
                sourcemap: false,
                discardComments: 
                {
                    removeAll: false
                },
            })
        )
        .pipe( mmq() )
        .pipe( csso() )
        .pipe( rename( { suffix: '.min' } ))
    
        .pipe( gulp.dest( config.dest))
        ;

});