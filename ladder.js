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
	var myStack = new Stack();
	
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
	   usedSet.add(runningVal);
	   myStack.push(runningVal);
	   myQ = searchWords(runningVal, myStack, length, words, usedSet, myQ);
	   for (var i = 0; i < myQ.getLength(); i++) {
	      var stack = new Stack();
		  stack = myQ.getItem(i);
		  usedSet.add(stack.getItem(stack.getLength()-1));
		  if (stack.getItem(stack.getLength()-1) == myVal2) {
		     foundStack = stack;
			 found = true;
			 reachedEnd = true;
		  }
	   }
	   
	   if (found == true) {
	      for (var i = 0; i < foundStack.getLength(); i++) {
		     insertItem(foundStack.getItem(i));
		  }
	   }
	/*
	   while (reachedEnd == false) {
	      for (var i = 0; i < words.length; i++) {
		     for (var i2 = 0; i2 < length; i2++) {
			    if (runningVal.charAt(i2) != words[i].charAt(i2)) {
                   difCount = difCount + 1;
                }
			 }
			 if (difCount == 1) {
			    var stack = new Stack();
				stack.push(runningVal);
				stack.push(words[i]);
				usedSet.add(words[i]);
				myQ.queue(stack);
			 }
			 difCount = 0;
		  }
		  usedSet.add(runningVal);
		  var firstStack = new Stack();
		  firstStack = myQ.getItem(myQ.getLength() -1);
		  myQ.dequeue();
		  if (firstStack.getItem(firstStack.getLength() -1) == myVal2) {
		     reachedEnd = true;
			 found = true;
			 for (var val = 0; val < firstStack.getLength(); val++) {
			    insertItem(firstStack.getItem(val));
			 }
		  }
		  else {
		     runningVal = firstStack.getItem(firstStack.getLength() -1);
			 var newStack = new Stack();
			 newStack = firstStack;
		  }
		  reachedEnd = true;
	   } */
	}
}

insertItem = function(value) {
   var ul = document.getElementById("count");
   var li = document.createElement("li");
   li.innerHTML = value;
   ul.appendChild(li);
}

searchWords = function(currentWord, currentStack, wordLen, wordDict, usedWordSet, queue) {
   var usedSet = new Set();
   usedSet = usedWordSet;
   var myQ = new Queue();
   myQ = queue;
   var length = wordLen;
   var words = wordDict;
   var runningVal = currentWord;
   var newStack = new Stack();
   newStack = currentStack;
   var difCount = 0;
   for (var i = 0; i < words.length; i++) {
      for (var i2 = 0; i2 < length; i2++) {
	     if (runningVal.charAt(i2) != words[i].charAt(i2)) {
            difCount = difCount + 1;
         }
	  }
	  if (difCount == 1) {
	    if (usedSet.doesNotContain(words[i])) {
		   var stack = new Stack();
		   for (var s = 0; s < newStack.getLength(); s++) {
		      stack.push(newStack.getItem(s));
		   }
		   stack.push(words[i]);
		   usedSet.add(words[i]);
	       myQ.queue(stack);
		}
	  }
	  difCount = 0;
   }
   return myQ;
}


window.onload = hello