const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel-client', () => {
    return gulp.src('client/src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('client/dist'));
});

gulp.task('babel-services', () => {
    return gulp.src('services/src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('services/dist'));
});

gulp.task('default', () => {
  gulp.start('babel-client', 'babel-services');
});

gulp.task('watch', () => {
  gulp.watch(['client/src/**/*.js', 'services/src/**/*.js'], ['babel-client', 'babel-services'])
});
