var host = 'https://api.0-fashion.com';

function return_Launch() {
	window.location.href = '../shezhi.html';
}

function closeWin(item) {
//	console.log(item);
	window.location.href = 'fenggeceshi_' + item + '.html';
}
function closeShezhi(){
	window.location.href = '../shezhi.html';
}
function backNew() {
	window.localStorage.ceShi=0;
	window.location.href = "fenggeceshi_1.html";
}

$(function() {
	var array
	$(".yinDaoy").click(function() {
		$(this).hide();
		$(this).attr('data-int', 1);
		var cls = $(this).attr('class');
		var var2=cls.split(' ')[1];
		console.log(var2);
		localStorage.setItem(var2,1);
	})
	if(localStorage.imgOne==1){
		$(".imgOne").hide();
	}
	if(localStorage.imgTwo==1){
		$(".imgTwo").hide();		
	}
	if(localStorage.imgThree==1){
		$(".imgThree").hide();		
	}
	if(localStorage.imgFour==1){
		$(".imgFour").hide();		
	}
	if(localStorage.imgFive==1){
		$(".imgFive").hide();		
	}
	if(localStorage.imgSix==1){
		$(".imgSix").hide();		
	}
	if(localStorage.imgSeven==1){
		$(".imgSeven").hide();		
	}
	if(localStorage.imgEight==1){
		$(".imgEight").hide();		
	}
	
})