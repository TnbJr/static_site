var gulp = require('gulp'),
          browserSync = require('browser-sync').create(),
          reload = browserSync.reload;

gulp.task('watch', function(){
	
  browserSync.init({
    notify: false,
    port: 3000,
    proxy: '127.0.0.1:3000',
  });

	gulp.watch('static/**/*').on('change', browserSync.reload);
	gulp.watch('views/*').on('change', browserSync.reload);
});




gulp.task('default', ['watch']);