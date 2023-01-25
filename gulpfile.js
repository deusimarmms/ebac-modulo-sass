

import gulp from 'gulp';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import imagemin from 'gulp-imagemin';
const sass = gulpSass(dartSass);
/* Minificando imagens */
gulp.task('imgmin', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

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

 /* Executar o comando gulp imgmin para minificar as imgs */
 /* Executar o comando minifyJS para minificar o script */
 /* Executar o comando gulp styles para pegar todos os arquivos scss e minificar criando 1 css unico e minificado */