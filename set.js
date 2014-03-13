Set = function() {

    var values = [];

    this.add = function(item) {
	   values.push(item);
    }
	
	this.contains = function(item) {
	   for (var i = 0; i < values.length; i++) {
	      if (values[i] == item) {
		     return true;
		  }
	   }
	   return false;
	}
	
	this.clear = function() {
	   values.length=0;
	}
}