//轮播对象
function Carousel(data) {
	this.images = data.images || [];
	this.buttons = data.buttons;
	this.mIndex = function (){
		var mIndex = this.images.length;
		if(mIndex <= 2){
			alert('请至少为carousel添加两张图片')
			return false;
		}else{
			return mIndex;
		}
	};
	this.autoAnimate = function(){
		 var autoAnimate = data.autoAnimate;
		 if( autoAnimate == undefined ){
			autoAnimate = true;
		}
		 return autoAnimate;
	};
	this._this = this;
	this.BlastAnimateBegined = false;
	this.intervalTime = data.intervalTime || 5000;
	this.constructor = document.querySelector(data.constructor) || 'body';
	//this.constructor.style.position = 'relative';
	this.carouselBlastBox = null;
	this.autoAnimate = data.autoAnimate;
	this.curentAnimateIndex = 0;
	this.imageIndex = 99;
	this.width = data.width || this.constructor.offsetWidth;
	this.height = data.height || this.constructor.offsetHeight;
}
Carousel.prototype.initLoadImage = function() {
	//初始化碎片
	if(!this.mIndex())return;
	
	this.intervalTime < 2000 ? this.intervalTime = 2000 : this.intervalTime = this.intervalTime;
	this.carouseltBox = document.createElement('div');
	this.carouseltBox.className = 'carouseltBox';
	this.carouseltBox.style.width = this.width +'px';
	this.carouseltBox.style.height = this.height +'px';
	this.carouseltBox.style.position = 'relative'
	this.carouseltBox.style.overflow = 'hidden';
	for ( var i= 0 ; i < this.mIndex() ; i++){
		this.loadBlast(this.images[i],i)//加载碎片
	}
	this.constructor.appendChild(this.carouseltBox)
	//是否自动执行动画
	if(this.autoAnimate == true || this.autoAnimate == undefined ){
		this.BlastAnimateBegin()
	}else{
		//不自动播放时，传入按钮数组绑定按钮点击执行切换
		if(this.buttons instanceof Array){
			this.clickAnimateButton()
		}
	}
};
//动画定时轮播
Carousel.prototype.BlastAnimateBegin = function(){
	if(this.BlastAnimateBegined)return;
	this.BlastAnimateBegined = true;
	var _this = this;
	setInterval(function(){
		_this.animateBlast()
		_this.curentAnimateIndex++;
		if(_this.curentAnimateIndex > _this.mIndex() - 1 ){
			_this.curentAnimateIndex = 0;
		}
	},this.intervalTime)
};
//初始化图片碎片
Carousel.prototype.loadBlast = function(imageSRC,imageIndex){
	
	this.carouselBlastBox = document.createElement('div');
	this.carouselBlastBox.className = 'carouselBlastBox';
	this.carouselBlastBox.style.zIndex = this.imageIndex;
	this.carouselBlastBox.style.position = 'absolute';
	this.carouselBlastBox.style.top = 0;
	this.carouselBlastBox.style.left = 0;
	var blastSwitch = (this.mIndex() + imageIndex) % 2 ;
	this.imageIndex--;
	switch( blastSwitch ){
		case 0:
			var oneBlastWidth = this.constructor.offsetWidth / 10;
			var oneBlastHeight = this.constructor.offsetHeight / 10;
			oneBlastWidth = oneBlastWidth.toFixed(0);
			oneBlastHeight = oneBlastHeight.toFixed(0);
			var Image = this.images[this.imageIndex % this.mIndex ];
			var oneBoxInnerHtml = '';
			for(var j = 0; j <= 10; j++) {
				for(var i = 0; i <= 10; i++) {
					var dealy = Math.abs(i - j) / 10;
					oneBoxInnerHtml += '<span class="oneBoxSquare" style="background-color:#21160f;background-image:url(' + imageSRC + ');background-position:' + -i * oneBlastWidth + 'px ' + -j * oneBlastHeight + 'px;display:block;position: absolute;width:' + oneBlastWidth + 'px;height:' + oneBlastHeight + 'px;top:' + j * oneBlastHeight + 'px;left:' + i * oneBlastWidth + 'px" ></span>'
				}
			}
		break;
		case 1:
			var oneBlastWidth = this.constructor.offsetWidth / 30;
			var oneBlastHeight = this.constructor.offsetHeight / 1;
			oneBlastWidth = oneBlastWidth.toFixed(0);
			oneBlastHeight = oneBlastHeight.toFixed(0);
			var Image = this.images[this.imageIndex % this.mIndex ];
			var oneBoxInnerHtml = '';
			for(var j = 0; j < 1; j++) {
				for(var i = 0; i <= 30; i++) {
					var dealy = Math.abs(i - j) / 10;
					oneBoxInnerHtml += '<span class="oneBoxRectangular" style="background-color:#21160f;background-image:url(' + imageSRC + ');background-position:' + -i * oneBlastWidth + 'px ' + -j * oneBlastHeight + 'px;display:block;position: absolute;width:' + oneBlastWidth + 'px;height:' + oneBlastHeight + 'px;top:' + j * oneBlastHeight + 'px;left:' + i * oneBlastWidth + 'px" ></span>'
				}
			}
		break;
		
	}
	
	this.carouselBlastBox.innerHTML = oneBoxInnerHtml;
	this.carouseltBox.appendChild(this.carouselBlastBox);
}
Carousel.prototype.animateBlast = function(targetAnimateIndex){
	//targetAnimateIndex存在时点击事件触发动画
	//console.log((this.curentAnimateIndex) +'target' + (targetAnimateIndex))
	//当前图片dom对象
	var blast = this.getChildren(this.carouseltBox,'carouselBlastBox',this.curentAnimateIndex);
	var thisBlastBox = blast.thisBlastBox;
	//当前图片碎片
	var thisBlastBoxSons = thisBlastBox.childNodes;
	thisBlastBox.style.zIndex = 1001;
	//下一张图片dom对象
	if(targetAnimateIndex == undefined ){//自动播放
		var nextBlastBox = blast.nextBlastBox;
	}else{//点击控制切换
		var nextBlastBox = this.getChildren(this.carouseltBox,'carouselBlastBox',targetAnimateIndex).thisBlastBox;
		if(this.curentAnimateIndex == targetAnimateIndex){
			return;//如果当前图片和目标图片是同一个,不继续执行动画
		}
		this.curentAnimateIndex = targetAnimateIndex;
	}
	//下一张图片碎片
	var nextBoxs = nextBlastBox.childNodes;
	nextBlastBox.style.zIndex = 1000;
	
	var boxClassName = thisBlastBoxSons[0].className;
	//控制碎片动画
	var t = 0;
	var transformTime = '.65s all';
	switch( boxClassName ){
		case 'oneBoxSquare'://正方形碎片
			switch( this.curentAnimateIndex % 3 ){
				case 0://左上手起
					 for( var i = 0; i < thisBlastBoxSons.length ; i ++){
						var this_blast = thisBlastBoxSons[i];
						t += 0.01 ;
						this_blast.style.transform = 'rotateY(180deg)';
						this_blast.style.opacity = '0';
						this_blast.style.webkitTransform = 'rotateY(180deg)';
						this_blast.style.perspective = '200px';
						this_blast.style.transition = transformTime;
						this_blast.style.webkitTransition = transformTime;
						this_blast.style.transitionDelay = t + 's';
					}
				break;
				case 1://碎裂漂浮
					for( var i = 0; i < thisBlastBoxSons.length ; i ++){
						var this_blast = thisBlastBoxSons[i];
						t = (Math.random()*10)/5;
						this_blast.style.transform = 'translateZ(300px) scale(.95,.95)';
						this_blast.style.opacity = '0';
						this_blast.style.perspective = '-300px';
						this_blast.style.transition = transformTime;
						this_blast.style.webkitTransition = transformTime;
						this_blast.style.transitionDelay = t + 's';
					}
				break;
				case 2://爆炸
					 for( var i = 0; i < thisBlastBoxSons.length ; i ++){
						var this_blast = thisBlastBoxSons[i];
						t += 0.03;
						var x = (Math.random() - 0.5) * 200;
						var y = (Math.random() - 0.5) * 200;
						this_blast.style.opacity = '0';
						this_blast.style.perspective = '200px';
						this_blast.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) translateZ(100px)';
						this_blast.style.webkitTransform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) translateZ(100px)';
						this_blast.style.transition = transformTime;
						this_blast.style.webkitTransition = transformTime;
					}
				break;
				
			}
		break;
		case 'oneBoxRectangular'://长方形碎片
			switch( this.curentAnimateIndex % 3 ){
				case 0 ://顺序翻转
					 for( var i = 0; i < thisBlastBoxSons.length ; i ++){
						var this_blast = thisBlastBoxSons[i];
						t += 0.03;
//						this_blast.style.opacity = '0';
						this_blast.style.transform = 'rotateY(90deg)';
						this_blast.style.webkitTransform = 'rotateY(90deg)';
						this_blast.style.perspective = '20px';
						this_blast.style.transition = transformTime;
						this_blast.style.webkitTransition = transformTime;
						this_blast.style.transitionDelay = t + 's';
						this_blast.style.webkitTransitionDelay = t + '1s';
						this_blast.style.transformOrigin = 'bottom center';
						this_blast.style.webkitTransformOrigin = 'bottom center'
					}
				break;
				case 1://百叶窗
					 for( var i = 0; i < thisBlastBoxSons.length ; i ++){
						var this_blast = thisBlastBoxSons[i];
						t += 0.01;
						this_blast.style.transform = 'translateY(1000px)';
						this_blast.style.webkitTransform = 'translateY(1000px)';
						this_blast.style.perspective = '200px';
						this_blast.style.transition = transformTime;
						this_blast.style.webkitTransition = transformTime;
						this_blast.style.transitionDelay = t + 's';
					}
				break;
				case 2:
					 for( var i = 0; i < thisBlastBoxSons.length ; i ++){
						var this_blast = thisBlastBoxSons[i];
						t += 0.02;
						this_blast.style.transform = 'scale(1,0)';
						this_blast.style.webkitTransform = 'scale(1,0)';
						this_blast.style.perspective = '200px';
						this_blast.style.transition = transformTime;
						this_blast.style.webkitTransition = transformTime;
						this_blast.style.transitionDelay = t + 's';
							
					}
				break;
			}
		break;
	}
	
	//动画完成后恢复位置
	thisBlastBox.lastChild.addEventListener('webkitTransitionEnd', function () {
		thisBlastBox.style.zIndex = 1;
		for( var i = 0; i < thisBlastBoxSons.length ; i++){
			thisBlastBoxSons[i].style.transition = '0s all';
			thisBlastBoxSons[i].style.opacity = '1';
			thisBlastBoxSons[i].style.transform = 'none';
			thisBlastBoxSons[i].style.transitionDelay = '0s'
		}
	}, false);
};
Carousel.prototype.getChildren = function(parentObj,sonClass,index){
	var sons = parentObj.childNodes;
	var classSons = [];
	for (var i = 0 ; i< sons.length ; i++){
		if( sons[i].className == sonClass){
			classSons.push(sons[i])
		}
	}
	var nextIndex= index + 1;
	if(nextIndex > this.mIndex() - 1){
		nextIndex = 0;
	}
	var nextBlastBox = classSons[nextIndex]
	return {'thisBlastBox' : classSons[index],'nextBlastBox':classSons[nextIndex]}
}

Carousel.prototype.clickAnimateButton = function(){
	var buttons = this.buttons;
	var btnHtml = new String(),btnDom;
	btnDom = document.createElement('div');
	btnDom.className = 'carouselButtonBox';
	var _this = this;
	for( var i = 0; i < this.mIndex(); i++){
		var oBtnDom = document.createElement('div');
		oBtnDom.className = "carouselButton";
		oBtnDom.innerHTML = '<span data-index='+ i +'>'+ buttons[i] +'</span>';
		(function clickButton(i){
			oBtnDom.onclick = function(){
				_this.animateBlast(i)
			};
	　　})(i)
		btnDom.appendChild(oBtnDom)
	}
	this.constructor.appendChild(btnDom)
	
}
