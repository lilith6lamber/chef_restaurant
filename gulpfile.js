const gulp = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.libs_style = tasks.libs_style;
exports.favicon = tasks.favicon;
exports.preload = tasks.preload;
exports.style = tasks.style;
exports.modules = tasks.modules;
exports.html = tasks.html;
exports.rastr = tasks.rastr;
exports.webp = tasks.webp;
exports.bs_html = tasks.bs_html;
exports.watch = tasks.watch;

exports.default = gulp.parallel(
  exports.libs_style,
  exports.favicon,
  exports.preload,
  exports.modules,
  exports.style,
  exports.rastr,
  exports.webp,
  exports.html,
  exports.bs_html,
  exports.watch
)
