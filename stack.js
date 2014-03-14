Stack = function() {

    var values = [];

    this.push = function(item) {
	   values.push(item);
	   return this;
    }
	
	this.pop = function(item) {
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