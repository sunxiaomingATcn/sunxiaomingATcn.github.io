require.config({　　　　
	paths: {
		"jquery": "../../content/jquery-2.1.1.min",
		//"moudleA": "a",
		"moudleB": "b",
		"moudleC":"c",
		"vue":"vue.min"
	},
	shim: {
　　　　　　'jquery.window':  ['jquery'],//加载非AMD规范的模块定义依赖模块,jquery全屏幕滚动插件
		'vue':{'exports':'vue'},
		'a':{deps:[], exports:'fna'},//exports定义导出全局函数
　　　　}
});

//加载非AMD规范的模块
//config  paths: {"moudleA": "a"}
//require(['moudleA'],function(Amodule){
//	//Amodule()//Amodule undefined is not a function 该模块未遵循AMD规范，所以并没有回传参数模块；
//	fna()//但是a.js脚本已经引入，脚本内的 a 函数已经引入全局，所以可以直接调用 a 函数
//})
//config shim{'a':{deps:[], exports:'fna'}}//exports定义导出全局函数
require(["a"],function(Amodule){
	Amodule()//shim中定义的模块,将全局变量回传到回调函数中;实际这个变量引入后就在全局,与上种方法的区别是该方法导入模块的全局变量值 fna 作为参数传入了该回调函数
})



require(['moudleB'],function(Bmodule){
	Bmodule.moudleBfn()
	alert(Bmodule.moudleBmath)
	Bmodule.moudleBrequireC()
})

require(['jquery','jquery.window'],function(){
	$(document).ready(function(){
        var $windows = $('.window');
        $windows.windows({
            snapping: true,
            snapSpeed: 500,
            snapInterval: 1100,
            onScroll: function(s){},
            onSnapComplete: function($el){},
            onWindowEnter: function($el){}
        });
    });
})

require(['vue'],function(Vue){
	var vue = new Vue({
		'el':'#vuebox',
		data:{
			a:'aaaaaaaa'
		}
	})
})
