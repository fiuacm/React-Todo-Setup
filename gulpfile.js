"use strict"

const gulp = require('gulp'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util'),
    nodemon = require('gulp-nodemon');

const config = {
    src: './client/public/js/index.js',
    dest: './client/public/dist/'
};

let bundle = (bundler) => {
    bundler
        .bundle()
        .pipe(source('bundled-app.js'))
        .pipe(buffer())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(config.dest))
        .on('end', () => gutil.log(gutil.colors.green('Finshed compiling js!')));
}

gulp.task('client-browserify', () => {

    let bundler = browserify(config.src, {
            debug: true
        })
        .plugin(watchify)
        .transform(babelify, {
            presets: ['es2015', 'react']
        });

    bundle(bundler);
})

gulp.task('start-server', () => {
  nodemon({
    script: 'index.js',
    ext: 'js',
    ignore: ['node_modules', 'client/public/dist', 'services/dist/'],
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('babel-services', () => {
    return gulp.src('services/js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('services/dist'));
});

gulp.task('watch', () => {
    gulp.watch(['client/public/js/**/*.js', 'services/src/**/*.js'], ['client-browserify', 'babel-services'])
});

gulp.task('default', () => {
    gulp.start('client-browserify', 'babel-services', 'start-server' ,'watch');
});
