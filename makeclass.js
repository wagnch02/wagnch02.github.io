Person = function(mySsn, myWeight, myAge, myName) {

    var ssn = mySsn
	var weight = myWeight
    this.age = myAge
	this.name = myName

    this.gainWeight = function(lbs) {
	   weight = weight+lbs
    }
	
	this.getSSN = function() {
	   return ssn
	}
	
	this.getWeight() {
	   return weight
	}
    
    //var baz = function() {
	//console.log(myprivatevariable)
    //}
	//called with baz()
}

Person.prototype.birthday = function() {
	this.age = this.age + 1
	return this.age
}

x = new Person(9232345, 250, 64, "Chris")

x.gainWeight(33)

console.log(x.birthday())



