function animateArc(canvas, percentage, radius, color, filltext) {
	//canvas：canvasdom对象
	//percentage:百分比（number）
	//radius：直径（number）
	//color：环的颜色
	var paintBrush = canvas.getContext('2d');

	var init = Math.PI;
	var start = Math.PI;
	var end = Math.PI + (Math.PI * percentage * 3.6 / 180);
	canvas.timer = setInterval(function() {
		start += 0.1;
		if(start >= end) {
			clearInterval(canvas.timer)
			paintBrush.font = "22px Courier New";
			//设置字体填充颜色
			paintBrush.fillStyle = color || "blue";
			//从坐标点开始绘制文字
			var filltext = filltext || percentage + "%";
			paintBrush.fillText(filltext, (canvas.width - 40) / 2, (canvas.width + 16) / 2);

			return;
		}
		//擦除
		paintBrush.clearRect(0, 0, canvas.width, canvas.width)
		//背景环
		paintBrush.beginPath();
		paintBrush.strokeStyle = 'rgba(0,0,0,.2)';
		paintBrush.lineWidth = 8;
		paintBrush.arc(canvas.width / 2, canvas.width / 2, radius / 2, 0, 2 * Math.PI, false);
		paintBrush.stroke();
		paintBrush.closePath();
		//进度环
		paintBrush.beginPath();
		paintBrush.strokeStyle = color || 'blue';
		paintBrush.arc(canvas.width / 2, canvas.width / 2, radius / 2, init, start, false);
		paintBrush.stroke();
		paintBrush.closePath();

	}, 20)
}