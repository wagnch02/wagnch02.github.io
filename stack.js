Stack = function(array) {

    this.svalues = [array];

    this.push = function(item) {
	   this.svalues.push(item);
	   return this;
    }
	
	this.pop = function(item) {
	   this.svalues.pop();
	   return this;
	}
	
	this.clear = function() {
	   this.svalues.length=0;
	   return this;
	}
	
	this.getItem = function(index) {
	   return this.svalues[index];
	}
	
	this.getLength = function() {
	   return this.svalues.length;
	}
}