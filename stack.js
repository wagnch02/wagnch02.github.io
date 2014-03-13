Stack = function() {

    var values = [];

    this.push = function(item) {
	   values.push(item);
	   return values;
    }
	
	this.pop = function(item) {
	   values.pop();
	   return values;
	}
	
	this.clear = function() {
	   values.length=0;
	   return values;
	}
	
	this.getItem = function(index) {
	   return values[index];
	}
	
	this.getLength = function() {
	   return values.length;
	}
}