<template id="question">
	<div class="pagebox">
		<p class="question-subject"><span class="questionNum">1</span>请选择预约件数</p>
		<div class="select-cloth-count">
			<img class="cloth" src="img/cloth@2x.png" />
			<div class="rulebox">
				<ul class="rule">
					<li><span class="ScaleNum">1</span></li>
					<li></li>
					<li></li>
					<li></li>
					<li class="pointScale"><span class="ScaleNum">5</span></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li class="pointScale"><span class="ScaleNum">10</span></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li class="pointScale"><span class="ScaleNum">15</span></li>
				</ul>
				<div @mousedown="dragstart($event)" @touchstart="dragstart($event)" class="pointer"></div>

				<!--@mousedown="dragstart($event)" @mouseup="dragend($event)"-->
			</div>
		</div>
		<a class="next-subject" href="#/question2">NEXT</a>
	</div>
</template>

<script>

	export default {
		name: 'hello',
		data() {
			return {
				clientXstart: 0,
				startLeft: 0,
			}
		},

		methods: {
			dragstart: function(ev) {
				console.log(ev)
				this.clientXstart = ev.clientX == 'undefined' ? ev.touches[0].clientX : ev.clientX;
				this.startLeft = document.querySelector('.pointer').style.left.replace("px", "");
				document.onmousemove = document.ontouchstart = this.dragmove;
				document.onmouseup = document.ontouchmove = this.dragend;
			},
			dragmove: function(ev) {
				var clientX = ev.clientX == 'undefined' ? ev.touches[0].clientX : ev.clientX;
				var deviationX = parseFloat(clientX) - parseFloat(this.clientXstart);
				var left = parseFloat(deviationX) + parseFloat(this.startLeft);
				var boundaryLeft = document.querySelector('.rule').offsetLeft;
				var boundaryright = document.querySelector('.rule').offsetLeft + document.querySelector('.rule').style.width.replace("px","") - 12;
				if(parseFloat(clientX) <= boundaryright && parseFloat(clientX) >= boundaryLeft) {
					document.querySelector('.pointer').style.left =  left + "px";
				}

			},
			dragend: function(ev) {

				document.onmousemove = document.ontouchstart = null;
				document.onmouseup = document.ontouchmove = null;

				var currentLeft = document.querySelector('.pointer').style.left.replace("px", "");
				console.log(Math.round(currentLeft / 16))

				document.querySelector('.pointer').style.left = Math.round(currentLeft / 16) * 16 + "px"


			}
		},
	}
</script>