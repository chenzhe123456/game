var gulp = require("gulp");  //gulp对象

var minifyCss = require('gulp-minify-css'); //css 压缩插件

var htmlmin = require("gulp-uglify"); //导入插件


gulp.task('cssTask', function(){
	gulp.src('css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('renew'));
});

gulp.task('default', [ 'cssTask']);


var gulp = require('gulp'); 
var uglify = require('gulp-uglify'); //js 压缩插件
var babel = require('gulp-babel');  

////压缩js
gulp.task('jsTask', function(){
	gulp.src('js/*.js')
	.pipe(babel({presets:['es2015']})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('renew'));
});
gulp.task('default', ['jsTask']);






















