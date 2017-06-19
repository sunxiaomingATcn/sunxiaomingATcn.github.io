
define(["require","exports","module",'jquery','c'],function(e,t,m,moduleJQ,moduleC){

	var b1 = function (){
		alert($('body').attr('class'))
	}
	var b2 = 1000;	
	var requireC = e('c').c//moduleC.c
	
	t.fnB1 = b1;//定义导出模块，也可以直接return
	t.B2 = b2;
	t.requireC = requireC;
	
//	return {
//		"fnB1":b1,
//		"B2":b2,
//		"requireC":requireC
//	};
})