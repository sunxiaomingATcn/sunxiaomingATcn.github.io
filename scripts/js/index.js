$.fn.extend({
	typing: function(str, timeInterval) {
		var _this = $(this)
		timeInterval = timeInterval || 200
		var len = str.length
		var thisWordIndex = 0
		if(typeof str == 'string' && len > 0) {
			var timer = setInterval(function() {
				_this.append('<span>' + str[thisWordIndex] + '</span>')
				thisWordIndex++;
				if(thisWordIndex == len) {
					clearInterval(timer)
				}
			}, timeInterval)

		}
	},
	//滚动到顶部
	scrollAppoint: function(timeInterval) {
		timeInterval = timeInterval || 500
		var scrollTop = $(this).offset().top
		//兼容火狐
		$('html,body').animate({
			'scrollTop': scrollTop
		}, timeInterval)
	},
	//鼠标跟随
	followMouse: function(MouseElement, timeInterval) {
		timeInterval = timeInterval || 500;
		var w = $(this).width();
		var h = $(this).height();
		$(this).bind("mouseenter mouseleave", function(e) {
			var w = $(this).width();
			var h = $(this).height();
			var x = (e.pageX - $(this).offset().left - (w / 2)) * (w > h ? (h / w) : 1);
			var y = (e.pageY - $(this).offset().top - (h / 2)) * (h > w ? (w / h) : 1);
			var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
			var targettop,targetleft;
			switch(direction) {
				case 0: //上方
						targettop = -h
						targetleft =  0
					break;
				case 1: //右侧
						targettop = 0
						targetleft = w
					
					break;
				case 2: //下方
						targettop =  h
						targetleft = 0
					
					break;
				case 3: //左侧
						targettop =  0
						targetleft = -w
					break;
			}
			if(e.type == 'mouseenter') {
				$(this).find('img').css({
					'transform': 'scale(1.1,1.1)',
					'transition': '1s all'
				});
				$(this).find(MouseElement).css({
					top : targettop ,
					left : targetleft
				});
				$(this).find(MouseElement).animate({
					top: 0,
					left: 0
				}, timeInterval)
			} else {
				$(this).find('img').css({
					'transform': 'scale(1,1)',
					'transition': '1s all'
				});
				$(this).find(MouseElement).animate({
					top: targettop,
					left: targetleft
				}, timeInterval);
			}

		})

	}
})


	
	var cnData = 
	{
		title:'前端开发工程师 明明',
		tips:'暂时比较简陋，正在完善中~',
		clickWorks:'我的作品',
		myworksTitle:'我的作品',
		mymessageTile:'联系我',
		works:[
			{href:'https://www.0-fashion.com',title:'零时尚官网',des:'企业在线官网',bgimage:'content/images/computer1.png'},			
			{href:'https://mall.0-fashion.com',title:'零时尚网上商城',des:'电商类网站',bgimage:'content/images/computer2.png'},
			{href:'https://oa.0-fashion.com',title:'小蝶扫码',des:'工具APP官网在线官网',bgimage:'content/images/computer3.png'},
			{href:'SXM_DEMO/vueCar/buyCar_component.html',title:'Vue购物车',des:'用Vue组件写的购物车',bgimage:'content/images/computer4.png'},
			{href:'https://github.com/sunxiaomingATcn/h5APP_LSS',title:'Hybrid APP',des:'Hbuilder开发混合应用',bgimage:'content/images/computer5.png'},
			{href:'https://github.com/sunxiaomingATcn/sunxiaomingATcn.github.io/tree/master/SXM_DEMO/nodejs',title:'NodeJs爬虫',des:'用NodeJS写的小爬虫demo',bgimage:'content/images/computer6.png'},
			{href:'SXM_DEMO/carousel/carousel.html',title:'JS原生图片轮播插件',des:'用原生js开发的幻灯片插件',bgimage:'content/images/computer7.png'},
			{href:'SXM_DEMO/fileReader/index.html',title:'H5图片上传预览插件',des:'基于FileReader API的图片上传预览插件',bgimage:'content/images/computer8.png'},
			{href:'',title:'',des:'',bgimage:'content/images/computer9.png'},
			{href:'SXM_DEMO/demo-dzp/index.html',title:'移动端H5转盘抽奖游戏',des:'',bgimage:'content/images/computer10.png'},
			{href:'https://github.com/sunxiaomingATcn',title:'我的GitHub',des:'',bgimage:'content/images/computer11.png'},
			{href:'http://www.cnblogs.com/xiaomingSun',title:'我的技术博客',des:'',bgimage:'content/images/computer12.png'}
		],
		messages:[
			{classname:'animate-show-up animateDelay1',title:'电话','answer':'请不要来电，本人不在线'},
			{classname:'animate-show-up animateDelay2',title:'QQ','answer':'请不要来电，本人不在线'},
			{classname:'animate-show-up animateDelay3',title:'微信','answer':'请不要来电，本人不在线'},
			{classname:'animate-show-up animateDelay4',title:'前端大牛想对我提出宝贵意见','answer':'不接受任何形式的批评'},
			{classname:'animate-show-up animateDelay5',title:'前端小白渴望与我同流合污','answer':'后续可能做留言板功能'},
			{classname:'animate-show-up animateDelay6',title:'我的尊严','answer':'想吸纳我去贵公司 mingmingsun@163.com'},			
		]
		
	}
	var enData = {
		title:'Web Developer Ming',
		tips:"For the time being, it's being perfected",
		clickWorks:'My work',
		myworksTitle:'My work',
		mymessageTile:'Contact me',
		works:[
			{href:'https://www.0-fashion.com',title:'Zero fashion official website',des:'Enterprise online official website',bgimage:'content/images/computer1.png'},			
			{href:'https://mall.0-fashion.com',title:'Zero fashion online mall',des:'Electricity supplier category website',bgimage:'content/images/computer2.png'},
			{href:'https://oa.0-fashion.com',title:'Kocho scan code',des:'Tools APP official website online official website',bgimage:'content/images/computer3.png'},
			{href:'SXM_DEMO/vueCar/buyCar_component.html',title:'Vue shopping cart',des:'A shopping cart written in Vue components',bgimage:'content/images/computer4.png'},
			{href:'https://github.com/sunxiaomingATcn/h5APP_LSS',title:'Hybrid APP',des:'Hbuilder developing mixed applications',bgimage:'content/images/computer5.png'},
			{href:'https://github.com/sunxiaomingATcn/sunxiaomingATcn.github.io/tree/master/SXM_DEMO/nodejs',title:'NodeJs crawler',des:'A small crawler written in demo NodeJS',bgimage:'content/images/computer6.png'},
			{href:'SXM_DEMO/carousel/carousel.html',title:'JS original picture carousel plugin',des:'Slide plug-in developed with native JS',bgimage:'content/images/computer7.png'},
			{href:'SXM_DEMO/fileReader/index.html',title:'H5 picture upload preview plugin',des:'Picture upload preview plugin based on FileReader API',bgimage:'content/images/computer8.png'},
			{href:'',title:'',des:'',bgimage:'content/images/computer9.png'},
			{href:'SXM_DEMO/demo-dzp/index.html',title:'Mobile terminal H5 turntable sweepstakes game',des:'',bgimage:'content/images/computer10.png'},
			{href:'https://github.com/sunxiaomingATcn',title:'My GitHub',des:'',bgimage:'content/images/computer11.png'},
			{href:'http://www.cnblogs.com/xiaomingSun',title:'My Technical blog',des:'',bgimage:'content/images/computer12.png'}
		],
		messages:[
			{classname:'animate-show-up animateDelay1',title:'Telephone','answer':"Please don't call me, I'm not online"},
			{classname:'animate-show-up animateDelay2',title:'QQ','answer':"Please don't call me, I'm not online"},
			{classname:'animate-show-up animateDelay3',title:'weChat','answer':"Please don't call me, I'm not online"},
			{classname:'animate-show-up animateDelay4',title:'The front bull wants to give me some valuable advice','answer':'Not accepting any form of criticism'},
			{classname:'animate-show-up animateDelay5',title:'The primary front end with my desire','answer':'Follow up may do message board function'},
			{classname:'animate-show-up animateDelay6',title:'My dignity','answer':'Want to take me to your company?:mingmingsun@163.com'},			
		]
	}
	
	var app = new Vue({
		el:'#pageContainer',
		data:{switchs:false},
		computed:{
			Language:function(){//控制语言
				return this.switchs?enData:cnData
			}
		}
		
	})
	
	
$(function() {
	
	//loading动画
	imageLoaded(function(){
		$('.loading-box').fadeOut()
	})
	
	
	//打印效果
	$('.web-developer-describe').typing('Talk is cheap , show me the code', 100);

	$('.myWorksTitle').click(function() {
		$('.my-achievements').scrollAppoint()
	})
	//鼠标跟随效果
	$('.one-work').followMouse('.work-inside-des')

	//显示邮箱
	$('.call-me').click(function() {
		$('.my-emial').addClass('animate-show-up')
	})
	//联系我动画
	$(window).on('scroll touchend', function() {

		var onPage3 = $('.pageContactMe').offset().top - $(window).scrollTop();
		onPage3 <= 5 ? $('.pageContactMe').addClass('animate-show').removeClass('animate-show-callback') : $('.pageContactMe').addClass('animate-show-callback').removeClass('animate-show')

	})
	
	
	//canvas heart
	var canvas = document.getElementById("canvasHeart");
	var ctx = canvas.getContext("2d");

	var ww, wh;
	ctx.strokeStyle = "red";
	ctx.shadowBlur = 25;
	ctx.shadowColor = "hsla(0, 100%, 60%,0.7)";
	
	var precision = 100;
	var hearts = [];
	var mouseMoved = false;
	onResize();
	window.addEventListener("mousemove", onMove);
	window.addEventListener("touchmove", onMove);
	window.addEventListener("resize", onResize);
	requestAnimationFrame(render);

	function onResize() {
		ww = canvas.width = window.innerWidth;
		wh = canvas.height = window.innerHeight;
	}
	
	function onMove(e) {
		mouseMoved = true;
		if(e.type === "touchmove") {
			hearts.push(new Heart(e.touches[0].clientX, e.touches[0].clientY));
			hearts.push(new Heart(e.touches[0].clientX, e.touches[0].clientY));
		} else {
			hearts.push(new Heart(e.clientX, e.clientY));
			hearts.push(new Heart(e.clientX, e.clientY));
		}
	}
	
	var Heart = function(x, y) {
		this.x = x || Math.random() * ww;
		this.y = y || Math.random() * wh;
		this.size = Math.random() + 1;
		this.shadowBlur = Math.random() * 10;
		this.speedX = (Math.random() - 0.5 ) * 8;
		this.speedY = (Math.random() - 0.5 ) * 8;
		this.speedSize = Math.random() * 0.05 + 0.01;
		this.opacity = 1;
		this.vertices = [];
		for(var i = 0; i < precision; i++) {
			var step = (i / precision - 0.5) * (Math.PI * 2);
			var vector = {
				x: (15 * Math.pow(Math.sin(step), 3)),
				y: -(13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step))
			}
			this.vertices.push(vector);
		}
	}
	
	Heart.prototype.draw = function() {
		this.size -= this.speedSize;
		this.x += this.speedX;
		this.y += this.speedY;

		ctx.save();
		ctx.translate(-1000, this.y);
		ctx.scale(this.size, this.size);
		ctx.beginPath();
		
		for(var i = 0; i < precision; i++) {
			var vector = this.vertices[i];
			ctx.lineTo(vector.x, vector.y);
		}
		ctx.globalAlpha = this.size;
		ctx.shadowBlur = Math.round((3 - this.size) * 10);
		ctx.shadowColor = "hsla(0, 100%, 60%,0.7)";
		ctx.shadowOffsetX = this.x + 1000;
		ctx.globalCompositeOperation = "screen"
		ctx.closePath();
		ctx.fill();
		ctx.restore();
	};
	
	function render(a) {
		requestAnimationFrame(render);
	
		hearts.push(new Heart())
		ctx.clearRect(0, 0, ww, wh);
		for(var i = 0; i < hearts.length; i++) {
			hearts[i].draw();
			if(hearts[i].size <= 0) {
				hearts.splice(i, 1);
				i--;
			}
		}
	}
	
	
})


//所有图片加载完成
function imageLoaded(fn){
	var totalImg = $('img').length;
    var currentImg = 0;
    $('img').on('load',function(){
	    currentImg++;
	    if(currentImg === totalImg){
			if(fn)fn()
	    }
   })
}


