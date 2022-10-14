const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const webpConvert = require('imagemin-webp')
const extReplace = require('gulp-ext-replace')

module.exports = function webp() {
	return gulp.src('src/img/*/*.{png,jpg}')
		.pipe(imagemin([
			webpConvert({
				quality: 75
			})
		]))
		.pipe(extReplace(".webp"))
		.pipe(gulp.dest('build/picture'))
}