var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('styles', function(){
     return sass('preprocessedFiles/scss/**/*.scss', {})
      .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function() {
  gulp.watch('preprocessedFiles/scss/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
