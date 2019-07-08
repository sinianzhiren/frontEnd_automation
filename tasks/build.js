import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','scss','pages','scripts', 'images', ['browser','serve']));
