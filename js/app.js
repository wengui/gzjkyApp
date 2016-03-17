
//API地址常量
var API_ADDRESS = 'http://192.168.1.160:8080/gzjkyApi/'; //定义了常量

// 页面跳转
function pageJump(page) {
	mui.openWindow({
		url: page,
		id: page,
		waiting: {
			autoShow: false //自动显示等待框，默认为true
		}
	});
}