Queue = function() {

    var values = [];

    this.queue = function(item) {
	   values.unshift(item);
    }
	
	this.dequeue = function(item) {
	   values.pop();
	}
	
	this.clear = function() {
	   values.length=0;
	}
}