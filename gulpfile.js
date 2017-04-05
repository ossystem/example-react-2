var gulp = require('gulp');
//server
var server = require('gulp-develop-server');
//sass
//var fs = require("fs");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var prefix = require('gulp-autoprefixer');
//minify css
var cleanCSS = require('gulp-clean-css');
//es6
var browserify = require("browserify");
var babelify = require("babelify");
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var jstify = require('jstify');
var buffer = require('vinyl-buffer');
//minify js
var uglify = require('gulp-uglify');
//refresh
var refresh = require('gulp-refresh');

var gulpif = require('gulp-if');

// run server

gulp.task('server:start', function() {
	server.listen({ path: './start.js' });
});

// restart server if app.js changed
gulp.task('server:restart', function() {
	gulp.watch(['./app.js',
		'./routes/*.js',
		'./bin/*.js',
		'./controllers/*.js'
	], server.restart);
});

//compile styles
gulp.task('sass', function() {
	console.log('--------------scss => to => css');
	gulp.src('app/styles/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(prefix("last 2 versions", "> 1%", "ie 8", "Android 2", "Firefox ESR"))
		.pipe(sourcemaps.write('.'))
		.pipe(gulpif(process.env.NODE_ENV === 'production', cleanCSS()))
		.pipe(gulp.dest('build/styles'))
		.pipe(gulpif(process.env.NODE_ENV === 'development', refresh()))
});

//minify css
gulp.task('minify-css', function() {
	return gulp.src('./build/styles')
		.pipe(cleanCSS())
		.pipe(gulp.dest('build/styles'));
});

//compile scripts
gulp.task('es6', function() {
	console.log('--------------es6 => to => es5');
	browserify({ debug: true })
		.transform(babelify)
		.require("./app/js/app.js", { entry: true })
		.bundle()
		.on('error', gutil.log)
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({ loadMaps: true }))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./build/js'))
		.pipe(gulpif(process.env.NODE_ENV === 'development', refresh()))
});

//build folder as bundle.js
gulp.task("scripts", function() {
	return browserify({
			entries: ["./app/js/app.js"]
		})
		.transform(babelify)
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest("./build/js"))
});

//copy bootstrap icons
gulp.task('icons', function() {
	return gulp.src(['node_modules/bootstrap-sass/assets/fonts/bootstrap/glyphicons-halflings-regular.*'])
		.pipe(gulp.dest('./build/fonts/bootstrap'));
});

//copy images
gulp.task('images', function() {
	return gulp.src(['app/img/**/*'])
		.pipe(gulp.dest('./build/img'));
});

//watch
gulp.task('watch', function() {
	refresh.listen();
	gulp.watch(['app/js/**/*.js'], ['es6']);
	gulp.watch(['app/styles/*.scss'], ['sass']);
});

//watch back end scripts
gulp.task('watch-back', function() {
	gulp.watch(['./app.js',
							'./routes/*.js',
							'./bin/*.js',
							'./controllers/*.js'
], server.restart);
});

//development
gulp.task('default', ['images', 'es6', 'sass', 'icons', 'server:start', 'watch', 'watch-back'], function() {
	console.log('GULP RUNING IN DEVELOPMENT');
	console.log(process.env.NODE_ENV + "=======");
});


//build
gulp.task('build', ['scripts', 'sass', 'icons', 'images'], function() {
	console.log('GULP BUILD PRODUCTION');
});


