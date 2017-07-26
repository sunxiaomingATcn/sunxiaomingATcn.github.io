var http = require("http");
var cheerio = require('cheerio');
var pageIndex = 1;
var requestLink = 'http://so.csdn.net/so/search/s.do?q=爬虫&p=' 

function download(url, callback) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}

function saveResult(data){		
	var $ = cheerio.load(data);
	
	if($('.search-list').length <= 0 )return;
	$('.search-list.J_search').each(function(i,item){
		var result = {
			'text':$(item).find('a').eq(0).text(),
			'href':$(item).find('a').eq(0).attr('href')
		}
		console.log(result.text + result.href)
		
	})
	
	pageIndex++;
	download(requestLink + pageIndex,saveResult)
}



download(requestLink + pageIndex,saveResult)



