/* This is a comment */
var tLW= threeLetterWords;
var fLW= fourLetterWords;
var fiLW=fiveLetterWords;

hello = function() {
    //var newh1 = document.createElement('h1')
    //newh1.innerHTML = 'Hello World!'
    //document.getElementById("temp1").appendChild(newh1)
    //document.body.appendChild(newh1)
}
// this is a single line comment
myCounter = 0
factors = function() {
    var newList = document.createElement('ul')
    //var newp = document.getElementById("count");
    //myCounter = myCounter +1;    
	var myVal = document.getElementById("myInt").value;
    //newItem.innerHTML = myVal;
    //newItem.style.fontSize = "25px";
    //newItem.style.color="red";
	var ele = document.getElementById("count");
	if (ele) {
	   while (ele.firstChild) {
	      ele.removeChild(ele.firstChild);
	   }
	}
	
	var start = 2;
	var lastInt = 0;
	while (myVal > 1) {
	   while (myVal % start == 0) {
	      
	      //var newItem = document.createElement('li')
          //document.getElementById("count").appendChild(newItem)
		  myVal /= start;
		  //newItem.innerHTML = start;
		  if (start != lastInt) {
		     insertItem(start, "item"+start);
			 insertItem(tLW[start], "item"+start+20);
		  }
		  lastInt = start;
	   }
	   start = start + 1;
	}
	
}

insertItem = function(value, newListItem) {
   var ul = document.getElementById("count");
   var li = document.createElement("li");
   li.innerHTML = value;
   ul.appendChild(li);
}


window.onload = hello