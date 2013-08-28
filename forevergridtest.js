

var readline = require('readline');

foreverGrid.init();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log('Request some data');
rl.setPrompt('> ', 2);
rl.prompt();

rl.on('line', function (line) {
	if(line.trim() === ""){
		rl.close;
		console.log('Bye');
  		process.exit(0);
		return;
	} 

	foreverGrid.request(line);
});