const gulp = require('gulp')
//const imagemin = require('gulp-imagemin')

module.exports = function images() {
	return gulp.src('src/img/*/*.{gif,png,jpg,svg,mp4}')
		/*.pipe(imagemin([
			imagemin.mozjpeg({
				quality: 75,
				progressive: true,
			}),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
				plugins: [
					{ removeViewBox: true },
					{ cleanupIDs: false }
				]
			}),
		]))*/
		.pipe(gulp.dest('build/picture'))
}