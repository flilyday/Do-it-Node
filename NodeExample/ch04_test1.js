//url모듈과 querystring모듈


// 1.url모듈
var url = require('url');

var urlStr = 'https://search.naver.com/search.naver?where=nexearch&sm=top_sug.pre&fbm=0&acr=6&acq=popcorn&qdt=0&ie=utf8&query=popcorn'

var curUrl = url.parse(urlStr);

console.dir(curUrl);
console.log(curUrl.query);

var curStr = url.format(curUrl);
console.log('url -> ' + curStr);


// 2.querystring모듈

var querystring = require('querystring')
params = querystring.parse(curUrl.query);
console.log('검색어 : ' + params.query);