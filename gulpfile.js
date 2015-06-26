var gulp            = require('gulp'),
    $               = require('gulp-load-plugins')(), // this is an arbitrary object that loads all gulp plugins in package.json.
    path            = require('path'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    del             = require('del'),
    fs              = require('fs'),
    gulpBowerFiles  = require('gulp-bower-files'),
    deploy          = require('gulp-gh-pages'),
    wiredep         = require('wiredep').stream;


//------- HOTFIX ERROR HANDLING
// https://github.com/gulpjs/gulp/issues/71#issuecomment-68062782
var origSrc = gulp.src;
gulp.src = function () {
    return fixPipe(origSrc.apply(this, arguments));
};

function fixPipe(stream) {
    var origPipe = stream.pipe;
    stream.pipe = function (dest) {
        arguments[0] = dest.on('error', function (error) {
            var nextStreams = dest._nextStreams;
            if (nextStreams) {
                nextStreams.forEach(function (nextStream) {
                    nextStream.emit('error', error);
                });
            } else if (dest.listeners('error').length === 1) {
                throw error;
            }
        });
        var nextStream = fixPipe(origPipe.apply(this, arguments));
        (this._nextStreams || (this._nextStreams = [])).push(nextStream);
        return nextStream;
    };
    return stream;
}
//------- END HOTFIX ERROR HANDLING

gulp.task("bower-files", function(){
    gulpBowerFiles().pipe(gulp.dest("./dist/bower_components/"));
});

gulp.task('wiredep',['bower-files'], function () {
  // del("./src/templates/includes/head.jade",function(err, data){console.log("ahhhhhh")} );
  gulp.src('./src/includes/_head.jade')
     .pipe(wiredep())
     .pipe(gulp.dest('./src/includes'));
 });

gulp.task('browser-sync', function() {
  browserSync({
    open: false,
    server: {
      baseDir: "./dist",
    }
  });
});

gulp.task('styles', function() {
  return gulp.src('./src/assets/stylesheets/**/*.{scss,sass}')
    .pipe($.sass({
      includePaths: ['./src/assets/stylesheets']
    }))
    .pipe(gulp.dest('./dist/assets/stylesheets'));
});


gulp.task('js', function() {
  return gulp.src('src/assets/scripts/*.js')
    .pipe($.plumber())
    .pipe( $.browserify({
      debug: true
    }))
    // .pipe( $.uglify() )
    .pipe( $.rename('main.js'))
    .pipe( gulp.dest('dist/assets/scripts/'));
});

gulp.task('images', function() {
  return gulp.src('./src/assets/images/**/*')
    .pipe($.imagemin({
      progressive: true
    }))
    .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('root-files', function() {
  return gulp.src('./src/**/*!(.jade)')
    .pipe(gulp.dest('./dist/'))
})

gulp.task('fonts', function() {
  // return gulp.src('./src/assets/fonts/**/*.{otf,woff,ttf,svg,eot}')
  return gulp.src('./src/assets/fonts/**/*')
    .pipe(gulp.dest('./dist/assets/fonts'))
})

gulp.task('templates', function() {
  // Disable partials from being renderd.
  return gulp.src(['src/**/!(_)*.jade'])
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe( gulp.dest('dist/') )
});

gulp.task('clean', function(cb) {
  del('./dist', cb);
});

gulp.task('build', ['styles', 'js', 'templates', 'images', 'fonts', 'root-files', 'wiredep']);

gulp.task('serve', ['build', 'browser-sync'], function () {
  gulp.watch('src/assets/stylesheets/**/*.{scss,sass}',['styles', reload]);
  gulp.watch('src/assets/scripts/*.js',['js', reload]);
  gulp.watch('src/assets/images/**/*',['images', reload]);
  gulp.watch('src/**/*.jade',['templates', reload]);
});

gulp.task('deploy', ['build'], function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

gulp.task('default', ['serve']);
