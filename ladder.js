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
	var temp;
	var templen;
	var templen2;
	var temparray;
	var lastWord;
	var count=0;
	
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
	   firstStack.svalues.push(runningVal);
	   while(reachedEnd == false) {
	      for (var i = 0; i < words.length; i++) {
            for (var i2 = 0; i2 < length; i2++) {
	            if (runningVal.charAt(i2) != words[i].charAt(i2)) {
                   difCount = difCount + 1;
                }
	        }
	        if (difCount == 1) {
	            if (usedSet.doesNotContain(words[i])) {
                    firstStack.svalues.push(words[i]);
		            usedSet.add(words[i]);
		            myQ.queue([]);
					insertItem(words[i]);
					for (var hp=0;hp<firstStack.getLength();hp++){
					   myQ.values[0].push(firstStack.getItem(hp));
					}
					templen=firstStack.svalues.length;
					lastWord=firstStack.svalues[templen-1];
					firstStack.svalues.pop();
		        }
	        }
	        difCount = 0;
          }
		  firstStack.svalues.push(lastWord);
		 for (var x = 0; x < myQ.getLength(); x++) {
		    temp=myQ.values[x];
			templen=myQ.values[x].length;
			//insertItem(temp);
		    if (temp[templen-1] == myVal2) {
		        foundStack.values = myQ.values[x];
			    found = true;
			    reachedEnd = true;
		    }
	     }
	     if (found == true) {
	         templen=foundStack.values.length;
			 for(var yay=0;yay<templen;yay++){
			    insertItem(foundStack.values[yay]);
			 }
	     }
	     else {
			 myQ.dequeue;
	      }
		count++;
		insertItem(firstStack.svalues);
		if (count==5) {
		   insertItem(myQ.values);
		   insertItem(firstStack.svalues);
		   reachedEnd=true;
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