var gulp = require('gulp');

// BUILD

gulp.task( 'build', [ 'sass', 'javascript', 'svg', 'minify', 'image'] );

// DEFAULT

gulp.task( 'default', [ 'build', 'watch'] );