const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')




/* Minificação de arquivos do vendor */


function tarefasCSS(cb) {
    return gulp.src('./vendor/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cssmin())
        .pipe(rename(rename({suffix: '.min'}))) /* libs.min.css */
        .pipe(gulp.dest('./dist/css'))
}
function tarefasJS(cb) {
    return gulp.src('./vendor/**/*.js')
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename(rename({suffix: '.min'}))) /* libs.min.js */
        .pipe(gulp.dest('./dist/js'))
}



exports.styles = tarefasCSS
exports.scripts = tarefasJS