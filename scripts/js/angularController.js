define(['angular', 'angularModule', 'jquery', 'EnglishData', 'ChineseData'], function(angular, app, $, EnglishData, ChineseData) {

	app.controller("myCtrl", function($scope) {
		//初始化语言
		$scope.Language = ChineseData;

		//监听切换语言变量按钮
		$scope.$watch('switchs', function(newValue, oldValue) {
			$scope.Language = newValue ? ChineseData : EnglishData
		});
		
		//元素滚动到置顶位置
		$scope.scrollAppoint =  function($event,scrollObj,timeInterval) {
			timeInterval = timeInterval || 500
			var scrollTop = $(scrollObj).offset().top
			//兼容火狐
			$('html,body').animate({
				'scrollTop': scrollTop
			}, timeInterval)
		}
		
		//我的作品鼠标跟随效果	
		$scope.achievementMouseenterLeave = function($event) {

			var timeInterval = timeInterval || 500;

			var w = $($event.currentTarget).width();
			var h = $($event.currentTarget).height();

			var MouseElement = '.work-inside-des';
			var x = ($event.pageX - $($event.currentTarget).offset().left - (w / 2)) * (w > h ? (h / w) : 1);
			var y = ($event.pageY - $($event.currentTarget).offset().top - (h / 2)) * (h > w ? (w / h) : 1);
			var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
			var currentTargettop, currentTargetleft;

			switch(direction) {
				case 0: //上方
					currentTargettop = -h
					currentTargetleft = 0
					break;
				case 1: //右侧
					currentTargettop = 0
					currentTargetleft = w

					break;
				case 2: //下方
					currentTargettop = h
					currentTargetleft = 0

					break;
				case 3: //左侧
					currentTargettop = 0
					currentTargetleft = -w
					break;
			}
			if($event.type == 'mouseenter') {
				$($event.currentTarget).find('img').css({
					'transform': 'scale(1.1,1.1)',
					'transition': '1s all'
				});
				$($event.currentTarget).find(MouseElement).css({
					top: currentTargettop,
					left: currentTargetleft
				});
				$($event.currentTarget).find(MouseElement).animate({
					top: 0,
					left: 0
				}, timeInterval)
			} else {
				$($event.currentTarget).find('img').css({
					'transform': 'scale(1,1)',
					'transition': '1s all'
				});
				$($event.currentTarget).find(MouseElement).stop().animate({
					top: currentTargettop,
					left: currentTargetleft
				}, timeInterval);
			}

		}

	});

})