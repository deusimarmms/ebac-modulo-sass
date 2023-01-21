

import gulp from 'gulp';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);



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

/* Minificação de Estilos */
gulp.task('styles',()=>{
    return gulp.src('src/sass/**/*.scss') /* Entrada SCSS */
    .pipe(sass())
    .pipe(rename({suffix: '.min'})) 
    .pipe(gulp.dest('./dist/css'))    /* SAIDA CSS */
})

