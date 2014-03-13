hello = function() {
    //var newh1 = document.createElement('h1')
    //newh1.innerHTML = 'Hello World!'
    //document.getElementById("temp1").appendChild(newh1)
    //document.body.appendChild(newh1)
}
// this is a single line comment
myCounter = 0
ladder = function() {
    var newList = document.createElement('ul')
    //var newp = document.getElementById("count");
    //myCounter = myCounter +1;    
	var myVal = document.getElementById("wordOne").value;
	var myVal2 = document.getElementById("wordTwo").value;
	var length = document.getElementByName("length").value;
    //newItem.innerHTML = myVal;
    //newItem.style.fontSize = "25px";
    //newItem.style.color="red";
	var ele = document.getElementById("count");
	if (ele) {
	   while (ele.firstChild) {
	      ele.removeChild(ele.firstChild);
	   }
	}
	
	var start = myVal;
	var tlw = threeLetterWords;
	var flw = fourLetterWords;
	var filw = fiveLetterWords;
	
	insertItem(length);
	/*while (start != myVal2) {
	
	}*/
	
	while (myVal > 1) {
	   while (myVal % start == 0) {
	      
	      //var newItem = document.createElement('li')
          //document.getElementById("count").appendChild(newItem)
		  myVal /= start;
		  //newItem.innerHTML = start;
		  if (start != lastInt) {
		     insertItem(start);
			 insertItem(threeLetterWords[start]);
		  }
		  lastInt = start;
	   }
	   start = start + 1;
	}
	
}

insertItem = function(value) {
   var ul = document.getElementById("count");
   var li = document.createElement("li");
   li.innerHTML = value;
   ul.appendChild(li);
}


window.onload = hello