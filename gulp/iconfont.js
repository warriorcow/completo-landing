const gulp = require('gulp')
const iconfontItem = require('gulp-iconfont')
const iconfontCss = require('gulp-iconfont-css')

module.exports = function iconfont() {
	return gulp.src('src/iconfont/*.svg')
		.pipe(iconfontCss({
			fontName: 'comp-iconfont',
			targetPath: '../../../src/style/font/comp-iconfont.scss',
			fontPath: '../fonts/comp/',
			formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
			prependUnicode: true,
			normalize: true,
			centerHorizontally: true,
			fontHeight: 1001
		}))
		.pipe(iconfontItem({
			fontName: 'comp-iconfont',
			formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
			prependUnicode: true,
			normalize: true,
			centerHorizontally: true,
			fontHeight: 1024,
			fontWeight: 1024
		}))
		.pipe(gulp.dest('build/fonts/comp/'))
}