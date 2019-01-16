/*eslint-env node */
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const eslint = require("gulp-eslint");
const minify = require("gulp-babel-minify");

// Default gulp task watches styles, linting and html changes
gulp.task("default", ["copy-html", "styles", "lint"], () => {
  gulp.watch("src/sass/**/*.scss", ["styles"]);
  gulp.watch("src/js/**/*.js", ["lint"]);
  gulp.watch("src/index.html", ["copy-html"]);
});

// Creates a distribution/production ready file of the project
gulp.task("dist", [
  "copy-html",
  "copy-images",
  "data",
  "styles",
  "lint",
  "scripts-dist"
]);

// Minify the scripts
gulp.task("scripts-dist", () => {
  gulp
    .src("src/js/**/*.js")
    .pipe(minify({ mangle: { keepClassName: true } }))
    .pipe(gulp.dest("dist/js"));
});

// Transfers data to the dist
gulp.task("data", () => {
  gulp.src("src/data/*").pipe(gulp.dest("dist/data"));
});

// Convert the SASS files into CSS files
gulp.task("styles", () => {
  // Convert and place them in src WITHOUT minification
  gulp
    .src("src/sass/**/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ browsers: ["last 2 versions"] }))
    .pipe(gulp.dest("src/css"));

  // Convert and place them in src WITH minification
  gulp
    .src("src/sass/**/styles.scss")
    .pipe(
      sass({
        outputStyle: "compressed"
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"]
      })
    )
    .pipe(gulp.dest("dist/css"));
});

// Lint the files
gulp.task("lint", () => {
  return (
    gulp
      .src(["src/js/**/*.js"])
      // eslint() attaches the lint output to the eslint property
      // of the file object so it can be used by other modules.
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failOnError last.
      .pipe(eslint.failOnError())
  );
});

// Copy index.html file
gulp.task("copy-html", () => {
  gulp.src("./src/*.html").pipe(gulp.dest("./dist"));
});

// Copy the images
gulp.task("copy-images", () => {
  gulp.src("src/img/**").pipe(gulp.dest("dist/img"));
});
