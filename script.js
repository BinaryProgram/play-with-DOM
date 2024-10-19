/*
To test the code comment out any portion
of code. Then inspect in browser and console area to see the effect of these code.
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

// multiple elements selector
/*
we can select multiple element in three ways -
getElementsByClassName()
querySelectorAll() 
getElementsByTagName()
*/

/*
const list = document.getElementsByClassName('item');
console.log(list);
for(let index of list){
    index.style.color = 'blue';
    index.style.fontSize  = '30px';
}
*/

/*
querySelectorAll()
 Returns all elements that match the specified CSS selector.
 return nodeList
*/

// const items = document.querySelector('#items');
// console.log(items.childNodes);
const item = document.querySelectorAll(".list");
console.log(item[1].childNodes);
