const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("sass/main.scss").pipe(sass()).pipe(dest("assets/css"));
}

function watchTask() {
  watch(["sass/main.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
