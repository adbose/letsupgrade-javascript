console.log("These are the scripts");

var str = `<h2> Hey there</h2>
<p>All good.</p>
`;
console.log(str);

let text = "The quick brown fox jumps over the wall";

console.log(text);

// To check the length
console.log(text.length)

// To change the case
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// Accessing the index
console.log(text[5]);
console.log(text.indexOf('o'));
console.log(text.lastIndexOf('o'))

console.log(text.charAt('12'));

console.log(text.endsWith("well"));

console.log(text.split('e'));

// Substring
var str = "Hello world!";
var res = str.substring(1, 4);
console.log(res);

var str = "Hello world!";
var res = str.slice(0, 5);
console.log(res);

// replaceAll
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace("Blue", "Red");
console.log(res);

var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");  // replace all
console.log(res);


// Array
// Array
let arr = ['one', true, 32, ['1','2']];
let arr2 = ['rio', 'berlin','alicia'];
console.log(arr);


console.log(Array.isArray(arr));
// indexOf('value')

console.log(arr.reverse())

console.log(arr[3]);

console.log(arr.concat(arr2));

// Appending an element
// At the start
arr2.unshift('tokyo');
console.log(arr2);
// At the end
arr2.push('helsinki');
console.log(arr2);