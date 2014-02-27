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
    var newp = document.createElement('p')
    document.getElementById("count").appendChild(newp)
    //var newp = document.getElementById("count");
    //myCounter = myCounter +1;    
    newp.innerHTML = document.getElementById("myInt").value;
    //newp.style.fontSize = myCounter+"px";
    if (newp.style.color=="blue") {
        newp.style.color="red";
    }
    else {
        newp.style.color="blue";
    }
}

window.onload = hello
