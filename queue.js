Queue = function() {

    var values = [];

    this.queue = function(item) {
	   values.unshift(item);
	   return values;
    }
	
	this.dequeue = function(item) {
	   values.pop();
	   return values;
	}
	
	this.clear = function() {
	   values.length=0;
	   return values;
	}
}