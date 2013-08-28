var io = require('socket.io').listen(9000);
var foreverGrid = require('./foreverGrid');

foreverGrid.init();
foreverGrid.on('changedata', function(data){
	io.sockets.emit('message', data);
})