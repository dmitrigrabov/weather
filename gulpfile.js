const babelify        = require( 'babelify' ),
      browserify      = require( 'browserify' ),

      gulp            = require( 'gulp' ),
      eslint          = require( 'gulp-eslint' ),
      notify          = require( 'gulp-notify' ),
      sourcemaps      = require( 'gulp-sourcemaps' ),
      uglify          = require( 'gulp-uglify' ),
      util            = require( 'gulp-util' ),
      open            = require( 'opener' ),
      buffer          = require( 'vinyl-buffer' ),
      source          = require( 'vinyl-source-stream' );

const inputDirectory  = './app/',
      outputDirectory = './public/';

const browserifyConfig = {
  entries     : __dirname + '/app/js/main.jsx',
  extensions  : [ '.jsx' ],
  transform   : [["babelify", {
    "presets": ["es2015", "react"]
  }]],
  debug       : true,
  cache       : {},
  packageCache: {}
};

gulp.task( 'browserify', function() {
  browserifyConfig.plugin = [];
  browserify( browserifyConfig ).bundle()
  .on( 'error', err => notify().write( err ) )
  .pipe( source('main.js') )
  .pipe( buffer() )
  .pipe( sourcemaps.init({ loadMaps: true }))
  .pipe( uglify() )
  .on( 'error', util.log )
  .pipe( sourcemaps.write( './' ) )
  .pipe( gulp.dest(outputDirectory + '/js') );
});

gulp.task( 'eslint', function () {
  var input = inputDirectory + '/js/**/*';

  return gulp.src([ input ])
    .pipe( eslint() )
    .pipe( eslint.format() )
    .pipe( eslint.failOnError() );
});

gulp.task('prod', function(){
  process.env.NODE_ENV = 'production';
});

gulp.task('prodbuild', ['prod', 'browserify' ]);

// Just running the two tasks
gulp.task('default', ['browserify']);
