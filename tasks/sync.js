var pkg = require('../package.json')
var gulp = require('gulp')
var browser = require('browser-sync')

gulp.task('sync', function () {
  browser.init(pkg.folders.dist + '/**', {
    server: {
      baseDir: ''
    }
  })
})
