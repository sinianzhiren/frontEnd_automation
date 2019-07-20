import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','scss', 'less', 'pages','scripts', 'images', ['browser','serve']));
