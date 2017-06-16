// gulpfile.js 

// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 编译less
//gulp.task('less', function() {
//  gulp.src('src/less/*.less') //该任务针对的文件
//      .pipe(sass()) //该任务调用的模块
//      .pipe(gulp.dest('./dist/css')); //将会在dist/css下生成index.css
//});

// 检查脚本
gulp.task('lint', function() {
    gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

//// 合并，压缩文件
//gulp.task('scripts', function() {
//  gulp.src('js/*.js')
//      //.pipe(concat('all.js'))
//      .pipe(gulp.dest('./dist'))
//      .pipe(rename({suffix: new Date().getTime()}))
//      .pipe(uglify())
//      .pipe(gulp.dest('./dist'));
//});

// 默认任务
gulp.task('default', function(){
    gulp.run('lint',  'scripts');

    // 监听JS文件变化
    gulp.watch('js/*.js', function(){
        gulp.run('lint', 'scripts'); //多个任务就直接往后加即可
    });
     // 监听less文件变化
//  gulp.watch('less/*.less', function(){
//      gulp.run('lint', 'less', 'scripts');
//  });
});
var rev = require('gulp-rev');

gulp.task('css', function () {
    return gulp.src('css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('dist/css'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/css' ) );
});

gulp.task('scripts', function () {
    return gulp.src('js/*.js')
        .pipe(rev())
        .pipe(gulp.dest('dist/js'))
        .pipe( rev.manifest() )
        .pipe( gulp.dest( 'rev/js' ) );
});


var revCollector = require('gulp-rev-collector');
var minifyHTML   = require('gulp-minify-html');

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