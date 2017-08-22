define(['vue','EnglishData', 'ChineseData'], function(Vue,EnglishData,ChineseData) {

	//vue实例化
	var app = new Vue({
		el: '#pageContainer',
		data: {
			switchs: true
		},
		computed: {
			Language: function() { //控制语言
				return this.switchs ? EnglishData : ChineseData
			}
		}

	})

})