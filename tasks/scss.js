import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';
import scss from 'gulp-sass'

gulp.task('scss',()=>{
  return gulp.src('app/**/*.scss')
      .pipe(scss())
      .pipe(gulp.dest('server/public'))
})
