var pkg = require('../package.json')
var gulp = require('gulp')
var browserify = require('browserify')
var babelify = require('babelify')
var watchify = require('watchify')
var uglify = require('gulp-uglify')
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer')
var util = require('gulp-util')

gulp.task('js', function () {
  var bundler = browserify({
    cache: {},
    debug: global.isWatching,
    entries: ['./' + pkg.folders.src + '/js/main.js'],
    fullPaths: false,
    packageCache: {}
  })
})
