const gulp = require("gulp")
const cssnano = require("gulp-cssnano")
const terser = require("gulp-terser")
const rename = require("gulp-rename")

gulp.task("minify-css", () => {
  return gulp
    .src("css/styles.css")
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"))
})

gulp.task("minify-js", () => {
  return gulp
    .src("js/main.js")
    .pipe(terser())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"))
})

gulp.task("default", gulp.parallel("minify-css", "minify-js"))
