/*
To test the code comment out any commented portion
of code. Then inspect in browser and look console area to see the effect of these code.
*/
console.log("connected");

// single element selector

/* const title = document.getElementById("title");
title.innerText = "Title, you are changed by js";
const paragraph = document.querySelector("p");
paragraph.textContent = "select the first html element(tag) or class";
const list = document.querySelector(".item");
list.style.color = 'red';
list.textContent = 'select the first html element(tag) or class which are same. '
*/

/*
querySelector()
 - Returns first elements that match the specified CSS selector.
 - return a element

*/

/*
----- Multiple elements selector -----
we can select multiple elements in three ways -

All elements are node but all nodes are not elements. Everything inside .js file are node.
Dom is a tree representation of object.
Nodes are in the DOM also known as Document Object model. In the DOM, all parts of the document, such as elements, attributes, text, etc. are organized in a hierarchical tree-like structure; consisting of parents and children. These individual parts of the document are known as nodes

getElementsByClassName() ->
 All elements with the specified class name
 Live HTMLCollection

querySelectorAll() ->
 Returns all elements that match the specified CSS selector.
 return static nodeList

getElementsByTagName() -
 All elements with the specified tag nameAll    elements with the specified tag name 
 return live HTMLCollection
*/

/*
const list = document.getElementsByClassName('item');
console.log(list);
for(let index of list){
    index.style.color = 'blue';
    index.style.fontSize  = '30px';
}
*/

// const items = document.querySelector('#items');
// console.log(items.childNodes);

// const item = document.querySelectorAll(".list");
// console.log(item[0].children);

// const tag = document.getElementsByTagName("ul");
// console.log(tag);

/*
***** Traversing DOM Hierarchically ***** 
We can traverse DOM either nodewise
or elementwise.
such as - 
nodewise -> previousSibling, nextSibling
elementwise -> previouseElementSibling, nextElementSibling
*/

// const traverse = document.querySelector('.item');
// console.log(traverse.previousElementSibling.nextSibling);
// console.log(traverse.parentElement);

/*
innerText vs textContent vs innerHTML
-> innerText ignore hidden content.
-> textContent doesn't ignore hidden content.
-> innerHTML has security issue.
we will use createElement over innerHTML
to inject HTML element from javaScript file to HTML file.
*/

// Dynamically set html element but not recommended.

// const setText = document.querySelector("#items");
// const userName = 'saklain';
// const age = '25';

// setText.innerHTML += `
// <h2> name: ${userName}</h2>
// <h3> age: ${age} </h3>`;

/*
style - dynamically change css properties
value - <input>,<textarea>,<select> 
*/
const title = document.querySelector("#title");
title.style.backgroundColor = "bisque";
title.style.border = "2px solid blue";

/*
setAttribute()
getAttribute()
removeAttribute()
*/

// const link = document.querySelector("#link");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://web.programming-hero.com");
// link.removeAttribute("target");
// document.querySelector('h1').removeAttribute('id');
// document.querySelector('h1').setAttribute('id','first-h1');
// const getId = document.querySelector('ul').getAttribute('id');
// console.log(getId);

/*
createElement()
classList.add() vs classList.remove()
appendChild() vs append()
insertBefore()
*/

const newElement = document.querySelector("#items");

const addElement = document.createElement("li");
addElement.innerText = "append support multiple argument";

const addParagraph = document.createElement("p");
addParagraph.innerText = " appendChild support single argument";
addParagraph.classList.add("first", "second");
addParagraph.classList.remove("second");
newElement.appendChild(addParagraph);
newElement.append(addElement, "append support both the node and text string");

const list = document.getElementById("items");

if (list.firstElementChild) {
  list.removeChild(list.firstElementChild);
}

const removeLink = document.getElementById('link');
removeLink.remove();

const div = document.querySelector("#form");
const divButton = document.getElementById("button");
const divParagraph = document.createElement("p");
divParagraph.innerText = "added before button by javaScript";
div.insertBefore(divParagraph, divButton);

