	
	//获取gulp文件配置
	var gulpSrc = require('./gulpConfig').gulpSrc();
	
	// 引入 gulp与组件
	var gulp = require('gulp');
	var jshint = require('gulp-jshint');//js语法检查
	var minifyCss = require("gulp-minify-css");//css压缩
	//var sass = require('gulp-sass');
	var concat = require('gulp-concat');//文件合并
	var uglify = require('gulp-uglify');//js压缩
	var rename = require('gulp-rename');
	var rev = require('gulp-rev');//- 对文件名加MD5后缀
	var revCollector = require('gulp-rev-collector');//结合rev替换文件名
	var clean = require('gulp-clean');//清除文件
	var imageMin = require('gulp-imagemin');
	var minifyHTML   = require('gulp-minify-html');

	
	// 创建默认任务
	gulp.task('default', ['clean'] , function(){
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

	})
	
	// 检查js脚本
	gulp.task('lint', function() {
	    gulp.src(gulpSrc.js)
	        .pipe(jshint())
	        .pipe(jshint.reporter('default'));
	});
	
	//css压缩重命名
	gulp.task('css', function () {
	    return gulp.src(gulpSrc.css)
	        .pipe(rev())
	        .pipe(minifyCss())
	        .pipe(gulp.dest('scripts/dist'))
	        .pipe( rev.manifest() )
	        .pipe( gulp.dest( 'rev/css' ) );
	});
	
	//js压缩重命名
	gulp.task('scripts', function () {
	    return gulp.src(gulpSrc.js)
	        .pipe(rev())
	        .pipe(uglify())
	        .pipe(gulp.dest('scripts/dist'))
	        .pipe( rev.manifest() )
	        .pipe( gulp.dest( 'rev/js' ) );
	});


	//修改html文件引入地址
	gulp.task('rev', function () {
	    return gulp.src(['rev/**/*.json', 'index_source_vue.html'])
	        .pipe( revCollector({
	            replaceReved: true,
	            dirReplacements: {
	                'css': "dist",
	                'js': "dist",
	                'cdn/': function(manifest_value) {
	                    return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
	                }
	            }
	        }) )
	//      .pipe( minifyHTML({
	//              empty:true,
	//              spare:true
	//          }) )
			.pipe(rename('index.html'))
	        .pipe( gulp.dest('') );
	});
	
	//清除dist下旧版本文件
	gulp.task("clean", function(){
	    return gulp.src('scripts/dist/*')
	        .pipe(clean());
	})

