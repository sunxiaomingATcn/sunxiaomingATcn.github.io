define(["require","exports","module",'jquery','moudleC'],function(e,t,m,moduleJQ,moduleC){

	var b1 = function (){
		alert($('body').attr('class'))
	}
	
	var b2 = 1000;	
	
	var requireC = e('moudleC').c//=moduleC.c ：导入c模块，引用c模块的方法
	
	t.moudleBfn = b1;//定义导出模块，也可以直接return
	t.moudleBmath = b2;
	t.moudleBrequireC = requireC;
	
//	return {
//		"moudleBfn":b1,
//		"moudleBmath":b2,
//		"moudleBrequireC":requireC
//	};
})


define(function(require,exports,module){
	//这种方式并不像seajs一样按需加载，实际上也是前置加载
		var $ = require('jquery')
	var b1 = function (){
		alert($('body').attr('class'))
	}
	
	var b2 = 1000;	
	//return;
	//在引用c模块前断点发现c模块还是引入了，因为RequireJS 内部通过 Function.prototype.toString() ，然后使用正则匹配所有的require 方法，将其转化为define(['./mod1',./mod2']function(mod1,mod2);
	//这也就是为什么这种方式定义模块参数名只能是require，从而使用打包工具压缩代码时出现问题。
	var requireC = require('moudleC').c//=moduleC.c ：导入c模块，引用c模块的方法
	
	exports.moudleBfn = b1;//定义导出模块，也可以直接return
	exports.moudleBmath = b2;
	exports.moudleBrequireC = requireC;
	
})