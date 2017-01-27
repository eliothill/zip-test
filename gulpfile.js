var gulp = require('gulp');

gulp.task('hello', function() {
  console.log('Hello Zell');
});	

const zip = require('gulp-zip');

gulp.task('zzz', () =>
    gulp.src('app/assets/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'))
);
