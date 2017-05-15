//头部动画		
var imageIndex = 0;
//轮播对象
function carousel(data) {
	this.images = data.images || [];
	this.mIndex = this.images.length;
	this.constructor = data.constructor || 'body';
	var _this = this;
	this.initLoadImage = function() {
		var i = 0;
		var lastIndex = _this.mIndex - 1;
		for(var a = 0; a < this.images.length; a++) {
			$(this.constructor).append('<img class="loadImage" style="display:none" src="' + this.images[a] + '" />').css('position','relative')
		}
		var initLoadImage = $('<img class="initLoadImage" src='+ this.images[0] +'/>')
		$(this.constructor).append(initLoadImage)
		initLoadImage.css({'position':'absolute','top':0,'left':0,'z-index':"99"})
		$('.loadImage').load(function() {
			i++;
			console.log(i)
			if(lastIndex == i) {
				setInterval(function() {
					$('.oneBox').remove()
					_this.loadFn[imageIndex % _this.loadFn.length]()
					i++;
				}, 5000)
			}
		})
	};
	
	this.loadFn = [
		function load1(index) {
			var oneBlastWidth = $(this.constructor).width() / 50;
			var oneBlastHeight = $(this.constructor).height() / 1;
			oneBlastWidth = oneBlastWidth.toFixed(0);
			oneBlastHeight = oneBlastHeight.toFixed(0);
			var Image = _this.images[imageIndex % _this.mIndex ];
			console.log(Image)
			for(var j = 0; j < 1; j++) {
				for(var i = 0; i < 50; i++) {
					var dealy = Math.abs(i - j) / 10;
					var html = '<span class="oneBox " style="z-index:1000;background-color:#21160f;background-image:url(' + Image + ');background-position:' + -i * oneBlastWidth + 'px ' + -j * oneBlastHeight + 'px;display:block;position: absolute;width:' + oneBlastWidth + 'px;height:' + oneBlastHeight + 'px;top:' + j * oneBlastHeight + 'px;left:' + i * oneBlastWidth + 'px" ></span>'
					$(_this.constructor).append(html)
				}
			}
			_this.animateFn[imageIndex % _this.animateFn.length]()
			console.log( imageIndex+ '________' + _this.images[imageIndex % _this.mIndex])
			imageIndex++;
			$('.initLoadImage').attr('src',_this.images[imageIndex % _this.mIndex])
		},
		function load2() {
			var oneBlastWidth = $(this.constructor).width() / 10;
			var oneBlastHeight = $(this.constructor).height() / 10;
			oneBlastWidth = oneBlastWidth.toFixed(0);
			oneBlastHeight = oneBlastHeight.toFixed(0);
			var Image = _this.images[imageIndex % _this.mIndex ];
			console.log(Image)
			for(var j = 0; j < 10; j++) {
				for(var i = 0; i < 10; i++) {
					var dealy = Math.abs(i - j) / 10;
					var html = '<span class="oneBox " style="z-index:1000;background-color:#21160f;background-image:url(' + Image + ');background-position:' + -i * oneBlastWidth + 'px ' + -j * oneBlastHeight + 'px;display:block;position: absolute;width:' + oneBlastWidth + 'px;height:' + oneBlastHeight + 'px;top:' + j * oneBlastHeight + 'px;left:' + i * oneBlastWidth + 'px" ></span>'
					$(_this.constructor).append(html)
				}
			}
			_this.animateFn[imageIndex % _this.animateFn.length]();
			console.log( imageIndex+ '________' + _this.images[(imageIndex+1) % _this.mIndex])
			imageIndex++;
			$('.initLoadImage').attr('src',_this.images[imageIndex % _this.mIndex])
		},

	];
	this.animateFn = [
		function animate1() {
			var boxs = $('.oneBox');
			var t = 0;
			$(boxs).each(function(i, item) {
				t += 0.03;
				var x = (Math.random() - 0.5) * 200;
				var y = (Math.random() - 0.5) * 200;
				var left = $(this).width() - $('body').width();
				$(this).css({
					opacity: '0',
					transform: 'rotateY(180deg)',
					webkitTransform: 'rotateY(180deg)',
					perspective: '200px',
					transition: '1.5s all',
					webkitTransition: '1.5s all',
					transitionDelay: t + 's',
					webkitTransitionDelay: t + '1s',
					transformOrigin: 'bottom center',
					webkitTransformOrigin: 'bottom center'
				})
			})
		},
		function animate2() {
			var boxs = $('.oneBox');
			var t = 0;
			$(boxs).each(function(i, item) {
				t += 0.05;
				var x = (Math.random() - 0.5) * 200;
				var y = (Math.random() - 0.5) * 200;
				var left = $(this).width() - $('body').width();
				$(this).css({
					opacity: '0',
					perspective: '200px',
					transform: 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) translateZ(100px)',
					webkitTransform: 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) translateZ(100px)',
					transition: '1.5s all',
					webkitTransition: '1.5s all'
				})
			})
		},
		
		function animate3() {
			var boxs = $('.oneBox');
			var t = 0;
			$(boxs).each(function(i, item) {
				t += 0.05;
				var x = (Math.random() - 0.5) * 200;
				var y = (Math.random() - 0.5) * 200;
				var left = $(this).width() - $('body').width();
				$(this).css({
					opacity: '0',
					transform: 'rotateY(180deg)',
					webkitTransform: 'rotateY(180deg)',
					perspective: '200px',
					transition: '1.5s all',
					webkitTransition: '1.5s all',
				})
			})
		}

	];
	this.initLoadImage()

}