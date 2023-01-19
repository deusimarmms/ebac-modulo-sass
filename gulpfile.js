

import gulp from 'gulp';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import minifyimage from 'gulp-imagemin';




/* Minificação de imagens */
gulp.task('minifyImg', () => {
    return gulp.src('src/img/**/*')

        .pipe(minifyimage())
        .pipe(gulp.dest('dist/img'))
})
/* Minificação de scripts */

gulp.task('minifyJS',()=>{
    return gulp.src('src/js/**/*')
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'})) //altera o nome para libs.min.js
    .pipe(gulp.dest('./dist/js'))    
})

