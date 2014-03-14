Queue = function() {

    var values = [];

    this.queue = function(item) {
	   values.unshift(item);
	   return this;
    }
	
	this.dequeue = function(item) {
	   values.pop();
	   return this;
	}
	
	this.clear = function() {
	   values.length=0;
	   return this;
	}
	
	this.getItem = function(index) {
	   return values[index];
	}
	
	this.getLength = function() {
	   return values.length;
	}
}