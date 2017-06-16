//var delParent;
//var defaults = {
//	fileType: ["jpg", "png", "bmp", "jpeg"], // 上传文件的类型
//	fileSize: 1024 * 1024 * 0.02 // 上传文件的大小 2M
//};
///*点击图片的文本框*/
//$(".file").change(function() {
//	var idFile = $(this).attr("id");
//	var file = document.getElementById(idFile);
//	var imgContainer = $(this).parents(".z_photo"); //存放图片的父亲元素
//	var fileList = file.files; //获取的图片文件
//	console.log(fileList + "======filelist=====");
//	var input = $(this).parent(); //文本框的父亲元素
//	var imgArr = [];
//	//遍历得到的图片文件
//	var numUp = imgContainer.find(".up-section").length;
//	var totalNum = numUp + fileList.length; //总的数量
//	if(fileList.length > 5 || totalNum > 5) {
//		alert("上传图片数目不可以超过5个，请重新选择"); //一次选择上传超过5个 或者是已经上传和这次上传的到的总数也不可以超过5个
//	} else if(numUp < 5) {
//		fileList = validateUp(fileList);
//		if(fileList.length == 0) {
//			$(this).val("");
//			return;
//		}
//		//			 var imgUrl = window.URL.createObjectURL(fileList[i]);
//		var ele = document.getElementById(idFile).files[0];
//		var fr = new FileReader();
//		var imgUrl = new Image();
//		fr.onload = function(ele) {
//			imgUrl.src = ele.target.result;
//			imgArr.push(imgUrl.src);
//			var $section = $("<section class='up-section fl loading'>");
//			imgContainer.prepend($section);
//			var $span = $("<span class='up-span'>");
//			$span.appendTo($section);
//
//			var $img0 = $("<img class='close-upimg'>").on("click", function(event) {
//				event.preventDefault();
//				event.stopPropagation();
//				layer.confirm('确定删除这张照片吗？', {
//					btn: ['确认', '取消'] //按钮
//				}, function(index) {
//					var numUp = delParent.siblings().length;
//					if(numUp < 6) {
//						delParent.parent().find(".z_file").show();
//					}
//					delParent.remove();
//					layer.close(index);
//				}, function(index) {
//					layer.close(index);
//				});
//				delParent = $(this).parent();
//			});
//			$img0.attr("src", "/Content/Images/Theme/a7.png").appendTo($section);
//			imgUrl.className = "up-img up-opcity";
//			$section.append(imgUrl);
//			var $input = $("<input id='taglocation' name='taglocation' value='' type='hidden'>");
//			$input.appendTo($section);
//			var $input2 = $("<input id='tags' name='tags' value='' type='hidden'/>");
//			$input2.appendTo($section);
//			setTimeout(function() {
//				$(".up-section").removeClass("loading");
//				$(".up-img").removeClass("up-opcity");
//			}, 450);
//			numUp = imgContainer.find(".up-section").length;
//			if(numUp >= 5) {
//				$(this).parent().hide();
//			}
//		}
//		fr.readAsDataURL(ele);
//
//	}
//
//	//input内容清空
//	$(this).val("");
//});
//
///*打开删除询问框*/
//$(".z_photo").delegate(".close-upimg", "click", function() {
//	layer.confirm('确定删除这张照片吗？', {
//		btn: ['确认', '取消'] //按钮
//	}, function(index) {
//		var numUp = delParent.siblings().length;
//		if(numUp < 6) {
//			delParent.parent().find(".z_file").show();
//		}
//		delParent.remove();
//		layer.close(index);
//	}, function(index) {
//		layer.close(index);
//	});
//	delParent = $(this).parent();
//});
//
//function validateUp(files) {
//	var arrFiles = []; //替换的文件数组
//	for(var i = 0, file; file = files[i]; i++) {
//		//获取文件上传的后缀名
//		var newStr = file.name.split("").reverse().join("");
//		if(newStr.split(".")[0] != null) {
//			var type = newStr.split(".")[0].split("").reverse().join("");
//			console.log(type + "===type===");
//			if(jQuery.inArray(type, defaults.fileType) > -1) {
//				// 类型符合，可以上传
//				if(file.size >= defaults.fileSize) {
//					layer.msg('您这个"' + file.name + '"文件大小过大');
//				} else {
//					// 在这里需要判断当前所有文件中
//					arrFiles.push(file);
//				}
//			} else {
//				layer.msg('您这个"' + file.name + '"上传类型不符合');
//			}
//		} else {
//			layer.msg('您这个"' + file.name + '"没有类型, 无法识别');
//		}
//	}
//	return arrFiles;
//}
//data = {
//	FileEl :domInput,
//	Container : $('.imamge'),
//	MaxSize : 2;
//	FileType : ["jpg", "png", "bmp", "jpeg"], // 上传文件的类型
//	Radio : true,//默认多选模式
//	
//}



