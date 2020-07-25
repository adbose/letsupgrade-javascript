console.log("DOM Basics");

// getting the elements

/*
1. getElementById
2. getElementByClassName
3. getElelmentByTagName
4. querySelector
5. querySelectorAll
*/

const title = document.getElementById("title");

console.log(title);
console.log(title.innerHTML);
console.log(title.innerText);

const imp = document.getElementsByClassName('imp');  // the return is HTML collection which can be accessed as list
console.log(imp);

const para = document.getElementsByTagName("p")[1];
console.log(para);

console.log(document.querySelector('#title'));  // selectors are css selectors
// when we query by css selectors, either id or class, we get only the first result

const imps = document.querySelectorAll('.imp');  // the return is NodeList and can be accessed as list
imps.forEach(el=>{console.log(el)});
console.log("asdfghjkl");
// html collection behaves like an array and can iterate over them using for loops
// but we cannot use array methods like forEach
// we can use array methods on NodeList

// converting html collection to array can be done using spread operator.
impArray = [...imp]  // spread operator
impArray.forEach(el=>{console.log(el)});

const subtitle = document.getElementById('subtitle');
console.log(subtitle);
console.log(subtitle.getAttribute('id'));
subtitle.setAttribute('style', 'color:blue');
subtitle.setAttribute('style', 'background-color:yellow'); // setAttribute will result in one class to be set
// we can add/remove multiple classes using classList


// in css we use attributes as background-color
// in JavaScript we use attributes like backgroundColor
subtitle.style.color = 'red';  // we set color using the style property of an element
subtitle.style.backgroundColor = 'yellow'; // this is how you can add multiple styles
