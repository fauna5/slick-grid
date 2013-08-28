var EventEmitter = require('events').EventEmitter;
var util = require('util');

dataGen = function(){
    this.data = [];
    for (var i = 0; i < 10; i++) {
      this.data[i] = {
        id: i,
        title: "Task " + i,
        duration: "5 days",
        percentComplete: Math.round(Math.random() * 100),
        start: "01/01/2009",
        finish: "01/05/2009",
        effortDriven: (i % 5 == 0)
      };
  };
}

util.inherits(dataGen, EventEmitter);

dataGen.prototype.init = function(){
	var that = this;
	var changedata = function(){
		that.data.unshift(that.data.pop());
		that.emit('changedata', that.data);
	}
	this.timeout = setInterval(changedata, 200);	
}

dataGen.prototype.request = function(subject){
	console.log(data);
}

module.exports = new dataGen();