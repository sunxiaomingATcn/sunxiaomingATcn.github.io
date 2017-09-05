$(function(){
	   getList();
		function getList(){
			$.get("https://api.0-fashion.com/Coupon/GetList",
				{
					    PageIndex:1,
					    PageSize:10,
						MemberId: localStorage.MemberId,
						U_Num: localStorage.u_num,
				},function(da){
						if(da.ResultType==3){
							console.log(JSON.stringify(da));
							var data=da.Data;
							$.each(data.List, function(i,item) {
								var dom="<li>"
											+"<div class='activity_item' data-id='"+item.CouponNum+"'>"
												+"<img src='"+item.CouponImagePath+"'>"
											+"</div>"
										+"</li>";
								$("#activity_ul").html(dom);
							});
						}else{
							layer.msg(da.Message)
						}
				})
		}
	          
	
	refresher.init({
	id:"wrapper",
	pullDownAction:Refresh,
	pullUpAction:Load
	});
	
var generatedCount = 0;
function Refresh() {
	console.log("refresh");
	  getList();
		myScroll.refresh();/****remember to refresh when you action was completed！！！****/

}

function Load() {
	console.log("load");
		myScroll.refresh();/****remember to refresh when you action was completed！！！****/

}


	
	$("#activity_ul").on("click",".activity_item",function(){
		
		var dataId=$(this).attr("data-id");
		localStorage.setItem("activityId",dataId);
		if(dataId=="0TAYSOVPXE"){
			//七夕节
			window.location.href="qixi_active.html";
		}else{
		  layer.msg("活动已结束");
		}
		
	})
	
})
