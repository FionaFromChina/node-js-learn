/**
 * Created by fiona on 2017-01-18.
 */
var ws  = require('nodejs-websocket');
console.log('开始建立连接');

var server = ws.createServer(function (conn) {
	conn.on('text',function(str){
		console.log('echo' + str);
		conn.sendText(str);
	})
	conn.on('close',function(code,reason){
		console.log('close');
	});
	conn.on('error',function(code,reason){
		console.log('err');
	})
}).listen(8001)
console.log('websocket init sucess.');

