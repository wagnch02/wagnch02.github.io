Stack = function() {

    var values = [];

    this.push = function(item) {
	   values.push(item);
    }
	
	this.pop = function(item) {
	   values.pop();
	}
	
	this.clear = function() {
	   values.length=0;
	}
}