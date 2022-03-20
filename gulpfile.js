const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const assets  = require('postcss-assets');


const themeName = 'hai';
const output = './app/public/wp-content/themes/';
const outputDir = output + themeName + '/assets/';
const srcDir = './src/';

const config = {
    localURL: themeName + '.local',
    srcSCSS: srcDir + 'scss/main.scss',
    jsOutput: outputDir + 'js/',
    cssOutput: outputDir + 'css/',
    jqueryPathJS: 'node_modules/jquery/dist/jquery.js',
    swiperPathJS: 'node_modules/swiper/swiper-bundle.js',
    jarallaxPath: 'node_modules/jarallax/dist/jarallax.js',
    granimPath: 'node_modules/granim/dist/granim.js'
};


// On Error: show notification
onError = function (err) {

  // Show notification
  notify.onError({
    title: "GULP ERROR",
    message: "Error: <%= error.message %>",
    sound: "Frog" // Basso, Blow, Bottle, Frog, Funk, Glass, Hero, Morse, Ping, Pop, Purr, Sosumi, Submarine, Tink. If sound is simply true, Bottle
  })(err);

  // Continue pipe stream
  this.emit('end');
};

// Output JS
gulp.task('scripts', function() {
  return gulp.src([
    config.jqueryPathJS, 
    config.jarallaxPath, 
    config.granimPath, 
    config.swiperPathJS 
  ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest( config.jsOutput ))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest( config.jsOutput ))
    .pipe(notify({ message: 'Scripts task complete' }));
});

// Compile CSS
gulp.task('compile-styles', function() {
  return gulp.src( config.srcSCSS )
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest( config.cssOutput ))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS('level: 2'))
    .pipe(gulp.dest( config.cssOutput ))
    .pipe(browserSync.stream());
});

// Process inline SVG
gulp.task('process-styles', function () {
  return gulp.src([ config.cssOutput + 'main.css', config.cssOutput + 'main.min.css'])
    .pipe(postcss([assets({
      loadPaths: [ config.outputDir + 'images/']
    })]))
    .pipe(gulp.dest('.'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Output CSS
gulp.task('styles', gulp.series('compile-styles', 'process-styles'));

// Serve
gulp.task('serve', function() {

  browserSync.init({
      proxy: config.localURL
  });

  gulp.watch(['./src/scss/**/*.scss', '!./node_modules/', '!./.git/'], gulp.series('compile-styles', 'process-styles'));

  gulp.watch(['./**/*.*', '!./node_modules/', '!./.git/', '!./**/*.scss', '!./main.css', '!./main.min.css']).on('change', browserSync.reload);
  
});

// Watcher
gulp.task('watch', function() {
  gulp.watch(['./**/*.scss', '!./node_modules/', '!./.git/'], gulp.series('compile-styles', 'process-styles' ));
});