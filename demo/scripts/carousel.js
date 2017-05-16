//轮播对象
function Carousel(data) {
	this.images = data.images || [];
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
	} ;
	this._this = this;
	this.BlastAnimateBegined = false;
	this.intervalTime = data.intervalTime || 5000;
	this.constructor = document.querySelector(data.constructor) || 'body';
	this.constructor.style.position = 'relative';
	this.carouselBlastBox = null;
	this.autoAnimate = data.autoAnimate;
	this.initLoadImage = function() {
		//初始化碎片
		if(!this.mIndex())return;
		this.intervalTime < 2000 ? this.intervalTime = 2000 : this.intervalTime = this.intervalTime;
		
		for ( var i= this.mIndex() - 1 ; i >= 0 ; i-- ){
			this.loadBlast(this.images[i],i)//加载碎片
		}
		//是否自动执行动画
		if(this.autoAnimate == true || this.autoAnimate == undefined ){
			this.BlastAnimateBegin()
		}
	};
	//动画定时轮播
	this.BlastAnimateBegin = function(){
		if(this.BlastAnimateBegined)return;
		this.BlastAnimateBegined = true;
		var blastBoxIndex = this.mIndex() - 1;
		var _this = this;
		setInterval(function(){
			_this.animateBlast(blastBoxIndex)
			blastBoxIndex--;
			if(blastBoxIndex == -1){
				blastBoxIndex = _this.mIndex() - 1;
			}
		},this.intervalTime)
	};
	//初始化图片碎片
	this.loadBlast = function(imageSRC,imageIndex){
		this.carouselBlastBox = document.createElement('div');
		this.carouselBlastBox.className = 'carouselBlastBox';
		this.carouselBlastBox.style.position = 'absolute';
		this.carouselBlastBox.style.top = 0;
		this.carouselBlastBox.style.left = 0;
		var blastSwitch = (this.mIndex() + imageIndex) % 2 ;
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
						oneBoxInnerHtml += '<span class="oneBox w" style="background-color:#21160f;background-image:url(' + imageSRC + ');background-position:' + -i * oneBlastWidth + 'px ' + -j * oneBlastHeight + 'px;display:block;position: absolute;width:' + oneBlastWidth + 'px;height:' + oneBlastHeight + 'px;top:' + j * oneBlastHeight + 'px;left:' + i * oneBlastWidth + 'px" ></span>'
					}
				}
			break;
			case 1:
				var oneBlastWidth = this.constructor.offsetWidth / 40;
				var oneBlastHeight = this.constructor.offsetHeight / 1;
				oneBlastWidth = oneBlastWidth.toFixed(0);
				oneBlastHeight = oneBlastHeight.toFixed(0);
				var Image = this.images[this.imageIndex % this.mIndex ];
				var oneBoxInnerHtml = '';
				for(var j = 0; j < 1; j++) {
					for(var i = 0; i <= 40; i++) {
						var dealy = Math.abs(i - j) / 10;
						oneBoxInnerHtml += '<span class="oneBox h" style="background-color:#21160f;background-image:url(' + imageSRC + ');background-position:' + -i * oneBlastWidth + 'px ' + -j * oneBlastHeight + 'px;display:block;position: absolute;width:' + oneBlastWidth + 'px;height:' + oneBlastHeight + 'px;top:' + j * oneBlastHeight + 'px;left:' + i * oneBlastWidth + 'px" ></span>'
					}
				}
			break;
			
		}
		
		
		this.carouselBlastBox.innerHTML = oneBoxInnerHtml;
		this.constructor.appendChild(this.carouselBlastBox)
	}
	this.animateBlast = function(blastBoxIndex){
		console.log(blastBoxIndex)
		var blast = this.getChildren(this.constructor,'carouselBlastBox',blastBoxIndex);
		var blastBox = blast.thisBlastBox;
		var nextBlastBox = blast.nextBlastBox;
		var boxs = blastBox.childNodes;
		var nextBoxs = nextBlastBox.childNodes;
		var t = 0;
		blastBox.style.zIndex = 101;
		nextBlastBox.style.zIndex = 100;
		switch( blastBoxIndex % 4 ){
			case 0 ://顺序翻转
				 for( var i = 0; i < boxs.length ; i ++){
					var this_blast = boxs[i];
					t += 0.03;
					this_blast.style.opacity = '0';
					this_blast.style.transform = 'rotateY(180deg)';
					this_blast.style.webkitTransform = 'rotateY(180deg)';
					this_blast.style.perspective = '200px';
					this_blast.style.transition = '1s all';
					this_blast.style.webkitTransition = '1s all';
					this_blast.style.transitionDelay = t + 's';
					this_blast.style.webkitTransitionDelay = t + '1s';
					this_blast.style.transformOrigin = 'bottom center';
					this_blast.style.webkitTransformOrigin = 'bottom center'
				}
			break;
			case 3://爆炸
				 for( var i = 0; i < boxs.length ; i ++){
					var this_blast = boxs[i];
					t += 0.03;
					var x = (Math.random() - 0.5) * 200;
					var y = (Math.random() - 0.5) * 200;
					
					this_blast.style.opacity = '0';
					this_blast.style.perspective = '200px';
					this_blast.style.transform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) translateZ(100px)';
					this_blast.style.webkitTransform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) translateZ(100px)';
					this_blast.style.transition = '1s all';
					this_blast.style.webkitTransition = '1s all';
				}
			break;
			case 2://百叶窗
				 for( var i = 0; i < boxs.length ; i ++){
					var this_blast = boxs[i];
					t += 0.02;
					this_blast.style.opacity = 1;
					this_blast.style.transform = 'translateY(-1000px)';
					this_blast.style.webkitTransform = 'translateY(-1000px)';
					this_blast.style.perspective = '200px';
					this_blast.style.transition = '1s all';
					this_blast.style.webkitTransition = '1s all';
					this_blast.style.transitionDelay = t + 's';
						
				}
			break;
			case 1://碎裂
				for( var i = 0; i < boxs.length ; i ++){
					var this_blast = boxs[i];
					t = Math.random();
					this_blast.style.opacity = '0';
					this_blast.style.transform = 'translateZ(100px) scale(.98,.98)';
					this_blast.style.perspective = '200px';
					this_blast.style.transition = '1s all';
					this_blast.style.webkitTransition = '1s all';
					this_blast.style.transitionDelay = t + 's';
				}
			break;
		}
		//动画完成后恢复位置
		blastBox.lastChild.addEventListener('webkitTransitionEnd', function () {
			blastBox.style.zIndex = 99;
			for( var i = 0; i < boxs.length ; i++){
				boxs[i].style.transition = '0s all';
				boxs[i].style.opacity = '1';
				boxs[i].style.transform = 'none';
				boxs[i].style.transitionDelay = '0s'
			}
		}, false);
	};
	this.getChildren = function(parentObj,sonClass,index){
		var sons = parentObj.childNodes;
		var classSons = [];
		for (var i = 0 ; i< sons.length ; i++){
			if( sons[i].className == sonClass){
				classSons.push(sons[i])
			}
			
		}

		var nextIndex= index - 1;
		if(nextIndex < 0){
			nextIndex =this.mIndex() - 1;
		}
		var nextBlastBox = classSons[nextIndex]
		return {'thisBlastBox' : classSons[index],'nextBlastBox':classSons[nextIndex]}
	}

}
