var gulp= require('gulp'),
    gutil=require('gulp-util')
    coffee=require('gulp-coffee'),
    concat=require('gulp-concat');

var coffeeSources=['components/coffee/*.coffee']


gulp.task('coffee',function(){
 gulp.src(coffeeSources)//uses a variable
 .pipe(coffee({bare:true})//option from  coffee script
 .on('error',gutil.log))//catches the error
 .pipe(gulp.dest('components/scripts/'))

});
