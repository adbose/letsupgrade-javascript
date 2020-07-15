// using var
var greeter = "hi";
var greeter = "hello";    // variables declared with var can be redeclared
greeter = "hello again"  // cariables declared with var can be updated

function getDate () {
    var date = new Date()
  
    return date
  }
  
  getDate();
  console.log(date);  // reference error


// using let
let greeting = "hi";  // let is block scoped
let n = 4;
if (n > 3) {
    let hello = "hello";
    console.log(hello);  //"say Hello instead"
}
console.log(hello);  // hello is not defined

let greeting2 = "say Hi";
greeting2 = "say Hello instead";  // this is allowed

let greeting3 = "say Hi";
let greeting3 = "say Hello instead"; //error: Identifier 'greeting' has already been declared


// using const
const greeting4 = "say Hi";  // const is also block scoped
const greeting4 = "say Hello instead";  // error : Identifier 'greeting' has already been declared
greeting4 = "say Hello instead";  // error : Assignment to constant variable.

