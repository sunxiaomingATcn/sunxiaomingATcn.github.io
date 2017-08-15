
	//初始化地址
	var gulpSrc = {
		"html":['templates/**/*.html'],
		"js":['js/*.js'],
		"css":['css/*.css']
	}
	// 引入 gulp
	var gulp = require('gulp');
	
	// 引入组件
	var jshint = require('gulp-jshint');
	var minifyCss = require("gulp-minify-css");
	//var sass = require('gulp-sass');
	var concat = require('gulp-concat');
	var uglify = require('gulp-uglify');
	var rename = require('gulp-rename');
	var rev = require('gulp-rev');
	var revCollector = require('gulp-rev-collector');
	var minifyHTML   = require('gulp-minify-html');



	
	// 默认任务
	gulp.task('default', function(){
	    gulp.run('lint',  'scripts' , 'css');         
	});
	
	//监听文件
	gulp.task('watch',function(){
		// 监听JS文件变化
		gulp.watch(gulpSrc.js, function(){
	        gulp.run('lint', 'scripts'); //多个任务就直接往后加即可
	    });
	    // 监听css文件变化
	    gulp.watch(gulpSrc.css, function(){
	        gulp.run('css'); //多个任务就直接往后加即可
	    });   
	    // 监听less文件变化
//		gulp.watch('less/*.less', function(){
//	      gulp.run('lint', 'less', 'scripts');
//		});
	})
	
	// 检查脚本
	gulp.task('lint', function() {
	    gulp.src(gulpSrc.js)
	        .pipe(jshint())
	        .pipe(jshint.reporter('default'));
	});
	
	gulp.task('css', function () {
	    return gulp.src(gulpSrc.css)
	        .pipe(rev())
	        .pipe(minifyCss())
	        .pipe(gulp.dest('dist/css'))
	        .pipe( rev.manifest() )
	        .pipe( gulp.dest( 'rev/css' ) );
	});

	gulp.task('scripts', function () {
	    return gulp.src(gulpSrc.js)
	        .pipe(rev())
	        .pipe(uglify())
	        .pipe(gulp.dest('dist/js'))
	        .pipe( rev.manifest() )
	        .pipe( gulp.dest( 'rev/js' ) );
	});

	gulp.task('rev', function () {
	    return gulp.src(['rev/**/*.json', 'templates/**/*.html'])
	        .pipe( revCollector({
	            replaceReved: true,
	            dirReplacements: {
	                'css': "dist/css/",
	                'js': "dist/js/",
	                'cdn/': function(manifest_value) {
	                    return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
	                }
	            }
	        }) )
	//      .pipe( minifyHTML({
	//              empty:true,
	//              spare:true
	//          }) )
	        .pipe( gulp.dest('templates') );
	});

// gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
// gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
// gulp.dest(path[, options]) 处理完后文件生成路径