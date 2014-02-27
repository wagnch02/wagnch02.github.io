/* This is a comment */

hello = function() {
    //var newh1 = document.createElement('h1')
    //newh1.innerHTML = 'Hello World!'
    document.getElementById("temp1").appendChild(newh1)
    //document.body.appendChild(newh1)
}
// this is a single line comment
myCounter = 0
factors = function() {
    var newList = document.createElement('ul')
	var newItem = document.createElement('li')
    document.getElementById("count").appendChild(newItem)
    //var newp = document.getElementById("count");
    //myCounter = myCounter +1;    
    newItem.innerHTML = document.getElementById("myInt").value;
    newItem.style.fontSize = "25px";
    newItem.style.color="red";
}

window.onload = hello
