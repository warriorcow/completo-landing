const gulp = require('gulp')
const plumber = require('gulp-plumber')
const rigger = require('gulp-rigger')
const terser = require('gulp-terser')

module.exports = function script() {
	return gulp.src('src/js/*.js')
		.pipe(rigger())
		.pipe(plumber())
		.pipe(terser())
		.pipe(gulp.dest('build/js'))
}