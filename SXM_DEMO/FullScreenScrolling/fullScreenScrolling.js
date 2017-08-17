(function ($) {     		
		$.fn.extend({
			fullpage: function(data) {
				//获取初始化参数
				var activeIndex,direction,pagination,speed;
				activeIndex = parseInt(data.activeIndex) || 1;
				if(data.direction == 'vertical' ){
					direction = 1;
				}else if( data.direction == 'horizontal' ){
					direction = 0;
				}else{
					direction = 1;
				}
				pagination = data.pagination  ? true : false;
				speed = data.speed ? data.speed : 1000;
				
				
				var _this = $(this);
				var pages = $(this).find('.fullPage');
				var maxPageLength = pages.length;
				$('html,body').height('100%').width('100%').css('overflow', 'hidden');
				var windowH = $('body').height();
				var windowW = $('body').width();
				
				$(this).css({
					transition:( speed/1000 )+'s all',
					transform:'translateY('+ windowH * ( 1 - activeIndex ) +'px)'
				})
				pages.css({
					width: '100%',
					height:windowH +'px'
				});
				
				if(direction == 0 ){
					$(this).width(1000000000000)
					pages.css('float','left')
				}
				var paginationHtml = '';
				for( var i = 0; i < maxPageLength ; i++ ){
					paginationHtml+= '<div class="pagination"></div>'
				}
				$('.fullpagePagination').append(paginationHtml)
				$('.fullpagePagination').find('.pagination').eq(activeIndex - 1 ).addClass('paginationActive')	
				
				$(document).on("mousewheel DOMMouseScroll", function(e) {
					var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
						(e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox
						
					if(delta > 0) {
						// 向上滚
						if( activeIndex <= 1 ) activeIndex = 2;
						activeIndex--;
						
						
					} else if(delta < 0) {
						// 向下滚
						if(activeIndex >= maxPageLength) activeIndex = maxPageLength - 1 ;
						activeIndex++;
					}
					if(direction){
						_this.css('transform','translateY('+ windowH * ( 1 - activeIndex ) +'px)')
					}else{
						_this.css('transform','translateX('+ windowW * ( 1 - activeIndex ) +'px)')
					}
					if(pagination){
						$('.fullpagePagination').find('.pagination').removeClass('paginationActive')
						$('.fullpagePagination').find('.pagination').eq(activeIndex - 1 ).addClass('paginationActive')	
					}
					
				});
				
				$(window).on('resize',function(){
					pages.css({
						width: '100%',
						height:windowH +'px'
					});
				})
			}
		})
	})(jQuery); 
	