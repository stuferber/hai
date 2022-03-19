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

gulp.task('scripts', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.bundle.js','node_modules/jarallax/dist/jarallax.js','node_modules/granim/dist/granim.js'])
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./app/public/wp-content/themes/hai/assets/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./app/public/wp-content/themes/hai/assets/js/'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('compile-styles', function() {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./app/public/wp-content/themes/hai/assets/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleanCSS('level: 2'))
    .pipe(gulp.dest('./app/public/wp-content/themes/hai/assets/css/'))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('process-styles', function () {
  return gulp.src(['./app/public/wp-content/themes/hai/assets/css/main.css','./app/public/wp-content/themes/hai/assets/css/main.min.css'])
    .pipe(postcss([assets({
      loadPaths: ['node_modules/bootstrap-icons/','./app/public/wp-content/themes/hai/assets/images/']
    })]))
    .pipe(gulp.dest('.'));
});

gulp.task('styles', gulp.series('compile-styles', 'process-styles'));

gulp.task('serve', function() {

  browserSync.init({
      proxy: "sentientmotion.local"
  });

  gulp.watch(['./src/scss/**/*.scss', '!./node_modules/', '!./.git/'], gulp.series('compile-styles', 'process-styles'));

  gulp.watch(['./**/*.*', '!./node_modules/', '!./.git/', '!./**/*.scss', '!./main.css', '!./main.min.css']).on('change', browserSync.reload);
  
});

gulp.task('watch', function() {
  gulp.watch(['./**/*.scss', '!./node_modules/', '!./.git/'], gulp.series('compile-styles', 'process-styles'));
});