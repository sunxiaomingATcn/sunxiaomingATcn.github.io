

$.fn.extend({
	typing:function(str,timeInterval){
		var _this = $(this)
		timeInterval = timeInterval || 200
		var len = str.length
		var thisWordIndex = 0
		if( typeof str == 'string' && len > 0 ){
			var timer = setInterval(function(){
				_this.append('<span>'+ str[thisWordIndex] +'</span>')
				thisWordIndex++;
				if(thisWordIndex == len ){
					clearInterval(timer)
				}
			},timeInterval)
			
			
		}
	},
	//滚动到顶部
	scrollAppoint:function(timeInterval){
		timeInterval = timeInterval || 500
		var scrollTop  = $(this).offset().top
		$('body').animate({'scrollTop':scrollTop},timeInterval)
	},
	//鼠标跟随
	followMouse:function(MouseElement,timeInterval){
		timeInterval = timeInterval || 500
		var w = $(this).width();
		var h = $(this).height();
		$(this).bind("mouseenter mouseleave",function(e){
			var w = $(this).width();
			var h = $(this).height();
			var x = (e.pageX - $(this).offset().left - (w / 2)) * (w > h ? (h / w) : 1);
			var y = (e.pageY - $(this).offset().top - (h / 2)) * (h > w ? (w / h) : 1);
			var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
			var eventType = e.type;
			var dirName = new Array('上方','右侧','下方','左侧');
			if(e.type == 'mouseenter'){
				switch( direction ){
					case 0://上方
						$(this).find(MouseElement).css({'top':-h,left:0});
					break;
					case 1://右侧
						$(this).find(MouseElement).css({'top':0,left:w});
					break;
					case 2://下方
						$(this).find(MouseElement).css({'top':h,left:0});
					break;
					case 3://左侧
						$(this).find(MouseElement).css({'top':0,left:-w});
					break;
				}
				$(this).find(MouseElement).animate({'top':0,left:0},timeInterval)
			}else{
				switch( direction ){
					case 0://上方
						$(this).find(MouseElement).animate({'top':-h,left:0},timeInterval);
					break;
					case 1://右侧
						$(this).find(MouseElement).animate({'top':0,left:w},timeInterval);
					break;
					case 2://下方
						$(this).find(MouseElement).animate({'top':h,left:0},timeInterval);
					break;
					case 3://左侧
						$(this).find(MouseElement).animate({'top':0,left:-w},timeInterval);
					break;
				}
				
			}
			
		})
		
	}
})

$(function(){
	//打印效果
	$('.web-developer-describe').typing('Talk is cheap , show me the code',100);
	
	
	$('.myWorksTitle').click(function(){
		$('.page2').scrollAppoint()
	})
	
	$('.one-work').followMouse('.work-inside-des')
	
	
	$('.call-me').click(function(){
		$('.my-emial').addClass('animate-show-up')
	})
	$(window).on('scroll touchend',function(){

		var onPage3 = $('.page3').offset().top-$(window).scrollTop();
		onPage3 <= 5 ? $('.page3').addClass('page3Animate'):$('.page3Animate').removeClass('page3Animate')
		
	})
})
