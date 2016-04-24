// CONFIG
// To clean the modules that are not used in package.json but still installed : 'npm prune' in terminal.

// SOURCE OF FILES
var src                     =   './src',

// NAMES OF FILES
    fileCSS                 =   'global.css',
    fileJS                  =   'functions.js',

// DESTINATION OF FILES
    dest                    =   "./dist",

// Option for gulp-cssnano ( https://github.com/ben-eb/gulp-cssnano )
    browserSupported        = [ 'last 2 versions', 'safari >= 8', 'iOS Safari >= 6', 'ie >= 10', 'ff >= 20', 'ios 4', 'android 4' ];

module.exports = {
    sass: {
        // Source of CSS files
        src: [
            // './node_modules/flexboxgrid/css/flexboxgrid.css',
            src + '/scss/global.scss'

        ],
        deps: [
            './node_modules/bootstrap-sass/assets/stylesheets',
            './node_modules/node-normalize-scss',
            './node_modules/breakpoint-sass/stylesheets',
            './node_modules/breakpoint-slicer/stylesheets',
            './node_modules/typi/scss',
        ],
        // Source to watch
        // To watch all files use **
        srcWatch: src + '/scss/**',
        file: fileCSS,
        // Destination
        dest: dest + '/css',
        supported: browserSupported,
    },

    javascript: {
        // Source of Javascript files
        src: [
            'node_modules/tocca/Tocca.js',
            'node_modules/wallop/js/Wallop.js',
            'node_modules/waypoints/lib/jquery.waypoints.min.js',
            'node_modules/smoothstate/src/jquery.smoothState.js',
            src + '/js/app.js',
            src + '/js/home.js',
            src + '/js/page.js',
            src + '/js/menu.js',
            src + '/js/image.js',
        ],
        // Source to watch
        srcWatch : src + '/js/*.js',
        file: fileJS,
        // Destnation
        dest: dest + '/js',
    },

    minify: {
        src: dest + '/css/' + fileCSS,
        srcWatch : src + '/scss/*.scss',
        dest: dest + '/css/min',
    },

    svg: {
        src: src + '/svg/*.svg',
        srcWatch : src + '/svg/*.svg',
        dest: dest + '/svg',
    },

    image: {
        src: './img/*.jpg',
        // srcWatch : src + '/svg/*.svg',
        dest: dest + '/img',
    }
};
