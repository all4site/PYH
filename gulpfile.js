var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass'),
	csso = require('gulp-csso'),
	jade = require('gulp-pug'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
	del = require('del'),
	gulpif = require('gulp-if'),
	wiredep = require('gulp-wiredep'),
	useref = require('gulp-useref'),
	tiny = require('gulp-tinypng'),
	uncss = require('gulp-uncss'),
	wait = require('gulp-wait'),
	newer = require('gulp-newer');

// BUILD
gulp.task('build', ['clean', 'tiny', 'combine'], function () {
	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
	var buildFonts = gulp.src('app/img/*.svg')
		.pipe(gulp.dest('dist/img/'))
	var buildVideoControl = gulp.src('app/css/*.svg')
		.pipe(gulp.dest('dist/css/'))
	var buildVideo = gulp.src('app/img/*.mp4')
		.pipe(gulp.dest('dist/img/'))
	var buildCss = gulp.src('app/css/main.min.css')
		.pipe(gulp.dest('dist/css'));
	var buildJs = gulp.src('app/js/main.js')
		.pipe(gulp.dest('dist/js'));
	var buildCopyOne = gulp.src('app/download/*')
		.pipe(gulp.dest('dist/download'));
	var buildCopyTwo = gulp.src('app/mail/*')
		.pipe(gulp.dest('dist/mail'));
	var buildCopyTwo = gulp.src('app/robots.txt')
		.pipe(gulp.dest('dist/'));
});

gulp.task('tiny', function () {
	gulp.src(['app/img/*.jpg', 'app/img/*.png'])
		.pipe(newer('dist/img'))
		.pipe(tiny('eKJf273ZwggolXsloo3tDizmOiER9tgr'))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('combine', function () {
	return gulp.src(['app/*.pug','!app/_*.pug'])
		.pipe(jade({
			pretty: true
		}))
		.on('error', notify.onError({
			message: "<%= error.message %>",
			title: "Jade Error!"
		}))
		.pipe(useref())
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', csso()))
		.pipe(gulp.dest('dist'))
});

gulp.task('clean', function () {
	return del.sync(['dist/css', 'dist/fonts', 'dist/js', 'dist/download',
		'dist/*.html'
	]);
});


// WORK
gulp.task('sass', function () {
	return gulp.src('app/sass/**/*.sass')
		.pipe(wait(500))
		.pipe(sass.sync())
		.on('error', notify.onError({
			message: "<%= error.message %>",
			title: "Sass Error!"
		}))
		.pipe(autoprefixer(['last 2 versions', '> 1%', 'ie 8'], {
			cascade: true
		}))
		.pipe(gulp.dest('app/css/'))
});

gulp.task('jade', function () {
	gulp.src(['app/*.pug', '!app/_*.pug'])
		.pipe(jade({
			pretty: true
		}))
		.on('error', notify.onError({
			message: "<%= error.message %>",
			title: "Jade Error!"
		}))
		.pipe(gulp.dest('app'))
});

gulp.task('browser-sync', function () {
	browserSync({
		// server: {
		// 	baseDir: 'app'
		// },
		proxy: 'pyh.local',
		notify: false,
		// port: 80
	});
});

gulp.task('bower', function () {
	gulp.src(['app/_header.pug', 'app/_footer.pug'])
		.pipe(wiredep({
			diewctory: 'app/wendor'
		}))
		.pipe(gulp.dest('app'))
		.pipe(browserSync.reload({
			stream: true
		}))
})

gulp.task('default', ['browser-sync', 'jade', 'bower','sass'], function () {
	gulp.watch('app/sass/*.sass', ['sass']);
	gulp.watch('app/*.pug', ['jade']);
	gulp.watch('bower.json', ['bower']);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/css/*.css', browserSync.reload);
});