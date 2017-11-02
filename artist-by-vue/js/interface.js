//所有接口的前缀
var urlPrefix = "http://127.0.0.1/project/artist/api/public/";
//http://192.168.0.3/api/artist/public/index.php?m=movie&a=detail	影视详情
//http://192.168.0.3/api/artist/public/index.php?m=music&a=detail	音乐详情
//图片的前缀
var imagePrefix = "http://127.0.0.1/project/artist/api/";

var mainListUrl = urlPrefix+"index.php?m=main&a=list";

var adsUrl = urlPrefix+"index.php?m=main&a=ads";

var readListUrl = urlPrefix+"index.php?m=read&a=list";

var readDetailUrl = urlPrefix+"index.php?m=read&a=detail";


var musicListUrl = urlPrefix+"index.php?m=music&a=list";

var musicDetailUrl = urlPrefix+"index.php?m=music&a=detail";

var movieListUrl = urlPrefix+"index.php?m=movie&a=list";

var movieDetailUrl = urlPrefix+"index.php?m=movie&a=detail";


//后台
//http://192.168.0.3/project/artist/api/public/index.php?m=user&a=register&username=aa&password=123456&phone=13600000001
//HTTP接口
//类型: GET   (GET/POST,不能直接放在浏览器中执行,jquery)
//协议: http:// 超文本传输协议
//域名: 192.168.0.3 www.hehe.com
//web程序:  /project/artist/api/public/index.php
//网址的参数:  ?k1=v1&k2=v2&k3=v3

//注意: 根基后台提供的API拼接URL发起请求, 获取数据之后显示
var registerUrl = urlPrefix+"index.php?m=user&a=register";


//http://127.0.0.1/api/artist/public/index.php?m=user&a=login&username=zz&password=21212
var loginUrl = urlPrefix+"index.php?m=user&a=login";

//收藏
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=getFavorite&userId=1&type=1   阅读
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=getFavorite&userId=1&type=4   音乐
//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=getFavorite&userId=1&type=5   影视
var getFavoriteUrl = urlPrefix+"index.php?m=favorite&a=getFavorite";

//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=saveFavorite&userId=6&itemId=1&type=1
var saveFavoriteUrl = urlPrefix+"index.php?m=favorite&a=saveFavorite";

//http://127.0.0.1/api/artist/public/index.php?m=favorite&a=cancelFavorite&userId=6&itemId=1&type=1
var cancleFavoriteUrl = urlPrefix+"index.php?m=favorite&a=cancelFavorite";


//http://127.0.0.1/api/artist/public/index.php?m=search&a=search&userId=1&keyword=121
var searchUrl = urlPrefix+"index.php?m=search&a=search";

