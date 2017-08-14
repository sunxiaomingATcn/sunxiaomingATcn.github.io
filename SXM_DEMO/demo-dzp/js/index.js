//抽奖
var lotteryTime=0;	
var readyBtn=true;//readyBtn防止连续点击抽奖
var lotteryResultNum;
$('#begin_lottery_btn').on('click',function(){		
	lotteryResultNum=parseInt(Math.random()*8+1);//模拟本次抽奖结果对应索引
	if(!readyBtn)return;			
	if(lotterytime())return;
	lotterying();	
	lotteryTime++;
	readyBtn=false;		
})	
//转盘绑定2D运动完成事件
$('#lottery_pan').on('transitionend',function(){
		lotterytime();		
		readyBtn=true;		
		publishResult();
	},false);
//抽奖过程 转盘旋转
function lotterying(){			
	var deg=setRotate();//必须存下来，否则兼容时每次调用会有不同返回值导致旋转角度改变
	$('#lottery_pan').css({
		'-webkit-transform':deg,
		'-moz-transform':deg,
		'-o-transform':deg,
		'transform':deg
	});
	$('#lottery_pan').css({
		'-webkit-transition':'all 3s ease-out',
		'-moz-transition':'all 3s ease-out',
		'-o-transition':'all 3s ease-out',
		'transition':'all 3s ease-out'
	});
}

//设置抽奖时旋转角度
var stardeg=0;
var enddeg=0;	
function setRotate(){	
	//目标角度=(转回相对的开始位置)+原来的角度值+中奖角度值+整圈
	enddeg=(360-(stardeg%360))+stardeg+(360/8*lotteryResultNum)+720;
	stardeg=enddeg;	
	return 'rotate('+enddeg+'deg)';
}
//模拟控制中奖次数,结束抽奖
function lotterytime(){
	if(lotteryTime>2){
		$('#arrow').attr('src','img/no-arrow.png');
		return true;
	}
}

//发布抽奖结果
function publishResult(){
	if(lotteryResultNum==3||lotteryResultNum==4){
		$('#lottery_fail, #bg').show();	
	}else{
		$('#lottery_win, #bg').show();
	}
}
	
//关闭中奖弹窗
$('#lottery_win_close').on('click',function(){
	$('#lottery_win, #bg').hide();
})

//关闭未中奖弹窗
$('#lottery_fail_close').on('click',function(){
	$('#lottery_fail, #bg').hide();
})