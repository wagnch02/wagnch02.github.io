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
	var length = document.getElementsByName("length")[0].value;
    //newItem.innerHTML = myVal;
    //newItem.style.fontSize = "25px";
    //newItem.style.color="red";
	var ele = document.getElementById("count");
	if (ele) {
	   while (ele.firstChild) {
	      ele.removeChild(ele.firstChild);
	   }
	}
	
	var runningVal = myVal;
	var found = false;
	var reachedEnd = false;
	
	var usedSet = new Set();
	var myQ = new Queue();
	var myStack = new Stack();
	
	var words = [];
	
	if (length == 3) {
	   words = threeLetterWords;
	}
	
	if (length == 4) {
	   words = fourLetterWords;
	}
	
	if (length == 5) {
	   words = fiveLetterWords;
	}
	
	if (myVal.length == length && myVal2.length == length) {
	   while (reachedEnd == false) {
	      for (val i = 0; i < words.length; i++) {
		     insertItem(words[i];
		  }
	      usedSet = usedSet.add(runningVal);
		  reachedEnd = true;
	   }
	}
	
	/*
	while (runningVal != myVal2) {
	   
	   start = myVal2;
	}*/
	
}

insertItem = function(value) {
   var ul = document.getElementById("count");
   var li = document.createElement("li");
   li.innerHTML = value;
   ul.appendChild(li);
}


window.onload = hello