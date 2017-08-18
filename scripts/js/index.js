$.fn.extend({
	//-----------------------------------------------------打印字符串
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
	//-----------------------------------------------------滚动到顶部
	scrollAppoint: function(timeInterval) {
		timeInterval = timeInterval || 500
		var scrollTop = $(this).offset().top
		//兼容火狐
		$('html,body').animate({
			'scrollTop': scrollTop
		}, timeInterval)
	},
	//------------------------------------------------------鼠标跟随
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
			var targettop, targetleft;
			switch(direction) {
				case 0: //上方
					targettop = -h
					targetleft = 0
					break;
				case 1: //右侧
					targettop = 0
					targetleft = w

					break;
				case 2: //下方
					targettop = h
					targetleft = 0

					break;
				case 3: //左侧
					targettop = 0
					targetleft = -w
					break;
			}
			if(e.type == 'mouseenter') {
				$(this).find('img').css({
					'transform': 'scale(1.1,1.1)',
					'transition': '1s all'
				});
				$(this).find(MouseElement).css({
					top: targettop,
					left: targetleft
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
				$(this).find(MouseElement).stop().animate({
					top: targettop,
					left: targetleft
				}, timeInterval);
			}

		})

	}
})



$(function() {
	
	//-------------------------------------------------------------------------loading动画
	imageLoaded(function() {
		$('.loading-box').fadeOut()
		$('body').css({'height':'auto','overflow':'auto'})
		$('.website-title').addClass('move')
	})

	//---------------------------------------------------------------------------打印效果
	$('.web-developer-describe').typing('Talk is cheap , show me the code', 100);

	$('.myWorksTitle').click(function() {
		$('.my-achievements').scrollAppoint()
	})

	//--------------------------------------------------------------------------鼠标跟随效果
	$('.one-work').followMouse('.work-inside-des')

	//--------------------------------------------------------------------------技能/联系我动画
	var pagetwo = true;
	$(window).on('scroll touchend', function() {
		var windowH = $(window).height();
		var ContactMeOffsetTop = $('.pageContactMe').offset().top - $(window).scrollTop();
		ContactMeOffsetTop <= windowH/3 ? $('.pageContactMe').addClass('animate-show').removeClass('animate-show-callback') : $('.pageContactMe').addClass('animate-show-callback').removeClass('animate-show')

		var mySkillPageOnOffsetTop = $('.my-Skill').offset().top - $(window).scrollTop();
		if(mySkillPageOnOffsetTop <= windowH/3) {
			$(
				$('.skillsTitle').show()
			)
			$('.my-Skill').addClass('activePage');
		}
		if(mySkillPageOnOffsetTop <= windowH/3 && pagetwo) {
			pagetwo = false;
			myskill()
		}

	})

	//-------------------------------------------------------------------------canvas heart
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
		this.speedX = (Math.random() - 0.5) * 8;
		this.speedY = (Math.random() - 0.5) * 8;
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

//---------------------------------------------------所有图片加载完成
function imageLoaded(fn) {
	var totalImg = $('img[data-imageload]').length;
	var currentImg = 0;
	$('img[data-imageload]').on('load', function() {
		currentImg++;
		if(currentImg === totalImg) {
			if(fn) fn()
		}
	})
}

//--------------------------------------------------------------------------我的技能
function myskill() {
	animateArc(document.getElementById('canvas1'), 90, 80, 'yellow');
	animateArc(document.getElementById('canvas2'), 90, 80, '#4dd0e1');
	animateArc(document.getElementById('canvas3'), 90, 80, '#80bd01');
	animateArc(document.getElementById('canvas4'), 90, 80, 'yellow');
}