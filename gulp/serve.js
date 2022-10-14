const gulp = require('gulp')

const images = require('./images')
const styles = require('./styles')
const pug2html = require('./pug2html')
const script = require('./script')
const iconfont = require('./iconfont')

const server = require('browser-sync').create()

function readyReload(cb) {
	server.reload()
	cb()
}

module.exports = function serve(cb) {
		server.init({
				server: 'build',
				notify: false,
				open: true,
				cors: true
		})

		gulp.watch('src/img/*/*.{gif,png,jpg,svg,webp}', gulp.series(images, readyReload))
		gulp.watch('src/iconfont/*.svg', gulp.series(iconfont, readyReload))
		gulp.watch(['src/style/**/*.scss', 'src/modules/*/*.scss', 'src/modules/*/*/*.scss', 'src/style/bootstrap/*.scss', 'src/style/libs/*.scss'], gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
		gulp.watch(['src/js/**/*.js', 'src/modules/*/*.js', 'src/modules/*/*/*.js'], gulp.series(script, readyReload))
		gulp.watch(['src/*.pug', 'src/modules/*/*/*.pug', 'src/modules/*/*.pug'], gulp.series(pug2html, readyReload))

		return cb()
}