/*this method will create new list items in the first unordered list and the will create another unordered list to
 add list items using an array*/

//create a new element storing it in a variable
let newL1 = document.createElement('li');

//create a text node to add to the element and store in variable
let newMethod = document.createTextNode("createElement()");

//add the new text to the new element
newL1.appendChild(newMethod);

// find the Unordered list in the DOM
let listNum = document.getElementsByTagName('ul')[0];

// add the new line
listNum.appendChild(newL1);

/////////////////////////////////////////////////////////////////////
//second part
//create a new unordered list then add the list elements from the array
///////////////////////////////////////////////////////////////////////
let ul = document.createElement('ul');

//define what we are setting in the function
ul.setAttribute('id', 'newList');

// define variable
let l;

//create an array to fill the unordered list
newList=["document.body", "document.images", "document.links", "document.anchors", "document.forms"];

//get the spot in the html where the new ul will go add element
document.getElementById('newUlList').appendChild(ul);
newList.forEach(renderNewList);

//create the  renderNewList function
function renderNewList(element, index, arr){

        //create the list elements and set class attributes
        let li = document.createElement('li');
        li.setAttribute('class', 'item');

        // add the li to the ul
        ul.appendChild(li);

        //create the text node calling the array
        l = document.createTextNode(element);

        li.innerHTML=li.innerHTML + element;
}




