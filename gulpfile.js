var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create(),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    path = require('path'),
    uglify = require('gulp-uglifyjs'),
    image = require('gulp-image');

gulp.task('browser-sync', ['styles', 'scripts', 'jade'], function() {
    browserSync.init({
        server: {
            baseDir: "build"
        },
        notify: false
    });
});
gulp.task('image', function () {
    gulp.src('./app/img/*')
        .pipe(image())
        .pipe(gulp.dest('build/img'));
});

//compile  less code
gulp.task('styles', function() {
    return gulp.src('./app/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename({
            suffix: '.min',
            prefix: ''
        }))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.stream());
});

//compile jade code
gulp.task('jade', function() {
    return gulp.src('app/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build'));
});

//add JS library for build
gulp.task('scripts', function() {
    return gulp.src(require('./dependencies.json').js)
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/js/'));
});

//add styles library
gulp.task('styles:libs', function() {
    return gulp.src(require('./dependencies.json').css)
        .pipe(concat('libs.css'))
        .pipe(gulp.dest('./build/css/'));
});

//add fonts
gulp.task('addFonts', function() {
    gulp.src(require('./dependencies.json').fonts)
        .pipe(gulp.dest('./build/fonts'));
});

//watchers
gulp.task('watch', function() {
    gulp.watch('app/style/**/*.scss', ['styles']);
    // gulp.watch('app/img/**/*.*', ['image']);
    gulp.watch('app/templates/**/*.jade', ['jade']);
    gulp.watch('app/js/libs/**/*.js', ['scripts']);
    gulp.watch('app/js/**/*.js', ['scripts']);
    gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
