var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglifycss = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');

function style() {
    return gulp.src('./scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist'))
}

function watch() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/*/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;