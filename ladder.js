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
	var myVal = document.getElementById("wordOne").value;
	var myVal2 = document.getElementById("wordTwo").value;
	var length = document.getElementsByName("length")[0].value;
	var ele = document.getElementById("count");
	if (ele) {
	   while (ele.firstChild) {
	      ele.removeChild(ele.firstChild);
	   }
	}
	var foundStack = new Stack();
	
	var runningVal = myVal;
	var found = false;
	var reachedEnd = false;
	
	var usedSet = new Set();
	var myQ = new Queue();
	var firstStack = new Stack();
	var tempStack = new Stack();
	var words = [];
	
	var difCount = 0; //count of different letters in a word
	
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
	   usedSet=usedSet.add(runningVal);
	   firstStack=firstStack.push(runningVal);
	   while(reachedEnd == false) {
	      for (var i = 0; i < words.length; i++) {
            for (var i2 = 0; i2 < length; i2++) {
	            if (runningVal.charAt(i2) != words[i].charAt(i2)) {
                   difCount = difCount + 1;
                }
	        }
	        if (difCount == 1) {
	            if (usedSet.doesNotContain(words[i])) {
                    firstStack = firstStack.push(words[i]);
		            usedSet=usedSet.add(words[i]);
		            myQ = myQ.queue(firstStack.svalues);
					firstStack = firstStack.pop();
		        }
	        }
	        difCount = 0;
          }
		 for (var x = 0; x < myQ.getLength(); x++) {
		    tempStack.svalues=myQ.getItem(x);
			insertItem(tempStack.svalues);
		    if (tempStack.getItem(tempStack.getLength()-1) == myVal2) {
		        foundStack = tempStack;
			    found = true;
			    reachedEnd = true;
		    }
	     }
	     if (found == true) {
	         for (var p = 0; p < foundStack.getLength(); p++) {
		        //insertItem(foundStack.getItem(p));
		     }
	     }
	     else {
	         firstStack = myQ.getItem(myQ.getLength()-1);
			 firstStack=firstStack.pop();
			 myQ = myQ.dequeue();
		     runningVal = firstStack.getItem(firstStack.getLength()-1);
			 //insertItem(runningVal);
			 //for (var xx = 0; xx < firstStack.getLength(); xx++) {
			   //insertItem(firstStack.getItem(xx));
			// }
			 
			 found = true;///////////////////delete later
		     reachedEnd = true;//////////////////delete later
	      }
	   }
	}
}

insertItem = function(value) {
   var ul = document.getElementById("count");
   var li = document.createElement("li");
   li.innerHTML = value;
   ul.appendChild(li);
}

window.onload = hello