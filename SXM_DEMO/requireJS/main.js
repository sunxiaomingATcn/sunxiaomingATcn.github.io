require.config({　　　　
	paths: {
		"jquery": "../../content/jquery-2.1.1.min",
		"aa": "a",
		"bb": "b",
		"cc":'c'
	},
	shim: {
　　　　　　'jquery.window':  ['jquery']//加载非AMD规范的模块
　　　　}
});

require(['aa'],function(Amodule){
	a()
})

require(['bb'],function(Bmodule){
	Bmodule.fnB1()
	alert(Bmodule.B2)
	Bmodule.requireC()
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
