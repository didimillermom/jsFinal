//Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays.

//Arrays
// using the dom get the id button1
let button = document.getElementById("button1");

// create the rainbow of colors using an array
let rainbow= ["azure", "lightcoral", "lightskyblue", "greenyellow", "lightgray", "blueviolet", "lightcrimson", "lightsalmon", "aquamarine", "gray"];

//create the function to randomly change the colors of the body
function change(){
    //change the background color
    document.body.style.backgroundColor = rainbow[Math.floor(10*Math.random())];
}

 button.addEventListener("click", change);

//Loops