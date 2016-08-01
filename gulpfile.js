var gulp = require('gulp'),
	browserSync = require('browser-sync').create();

// browser-sync

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

// watch 

gulp.task('watch', function() {
	gulp.watch('app/*.html').on('change', browserSync.reload)
	gulp.watch('app/css/*.css').on('change', browserSync.reload)
	gulp.watch('app/js/*.js').on('change', browserSync.reload);
})

// deafault

gulp.task('default', ['browser-sync', 'watch']);