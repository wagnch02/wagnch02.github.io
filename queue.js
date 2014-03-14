Queue = function(array) {

    this.values = [array];

    this.queue = function(item) {
	   this.values.unshift(item);
	   return this;
    }
	
	this.dequeue = function(item) {
	   this.values.pop();
	   return this;
	}
	
	this.clear = function() {
	   this.values.length=0;
	   return this;
	}
	
	this.getItem = function(index) {
	   return this.values[index];
	}
	
	this.getLength = function() {
	   return this.values.length;
	}
}