var gulp = require('gulp')
var sass = require('gulp-sass')
var sourcemaps = require('gulp-sourcemaps')

var paths = {
  styles: 'scss/**/*.scss'
}

gulp.task('styles', function() {
  var sassOptions = {
    includePaths: [
      __dirname + '/node_modules/appirio-styles/node_modules/node-neat/node_modules/node-bourbon/node_modules/bourbon/app/assets/stylesheets',
      __dirname + '/node_modules/appirio-styles/node_modules/node-neat/node_modules/bourbon-neat/app/assets/stylesheets',
      './node_modules/appirio-styles/styles'
    ]
  }

  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./styles'))
})

gulp.task('watch', function() {
  gulp.watch(paths.styles, ['styles'])
})

gulp.task('default', ['styles', 'watch'])