var gulp = require("gulp")
var sass = require("gulp-sass")
var cleanCss = require("gulp-clean-css")


gulp.task("sass", function () {
  // we want to run "sass css/app/scss app.css --watch"
  return gulp.src("css/app.scss")
  	.pipe(sass())
  	.pipe(cleanCss())
  	.pipe(gulp.dest("."))
})

gulp.task("watch", function () {
	gulp.watch("css/app.scss", ["sass"])
})


gulp.task('default', ["sass", "watch"]);


