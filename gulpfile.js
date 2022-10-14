const gulp = require('gulp')

const serve = require('./gulp/serve')
const pug2html = require('./gulp/pug2html')
const styles = require('./gulp/styles')
const script = require('./gulp/script')
const fonts = require('./gulp/fonts')
const iconfont = require('./gulp/iconfont')
const images = require('./gulp/images')
const webp = require('./gulp/webp')

module.exports.default = gulp.series(pug2html, styles, script, fonts, iconfont, images, webp, serve);

module.exports.test = gulp.series(pug2html);