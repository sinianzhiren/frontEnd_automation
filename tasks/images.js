import gulp from 'gulp'
import imagemin from 'gulp-imagemin'

gulp.task('images', () => {
    return gulp.src('app/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('server/public/images/'))
})