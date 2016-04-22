var io = require('socket.io')(8080);

var status = 0; //status defined if process is listening -> 0: no, 1: yes
var inputRFID = "emtpy";

	
	var readline = require('readline');
		var rl = readline.createInterface({
		  input: process.stdin,
		  output: process.stdout,
		  terminal: false
		});
		rl.on('line', function(line){
			if(status === 1 && inputRFID != "emtpy"){
				inputRFID.emit('actualStatus', line);
				status = 0;
			}
		})

io.sockets.on('connection', function (socket, err) {
	inputRFID = socket;
	console.log('connected');

	socket.on('listen', function() {
		status = 1;
	});
	
	socket.on('stop', function() {
		
		status = 0;
	});
	
	socket.on('getStatus', function() {
		socket.emit('actualStatus', status);
	});
	
	socket.on('disconnect', function() {
		inputRFID = "emtpy";
	});

});




