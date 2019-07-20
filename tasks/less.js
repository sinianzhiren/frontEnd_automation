import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';
import less from 'gulp-less'

gulp.task('less',()=>{
  return gulp.src('app/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('server/public'))
})
