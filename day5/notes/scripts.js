console.log("Functions");

function hello(){
    console.log("Hello world");
}
hello();


let greet = function(){
    console.log("Fucntion assigned to variable");
}
greet();


let welcome = function(name="anon"){
    console.log(`Hello, ${name}`);
}
welcome();


let addition = function(num1=0, num2=0){
    let sum = +num1 + +num2;
    return sum;
}
let result = addition('10', 6);
console.log(result)

// static method of a class in JavaScript allows it to be accesed only by the class, not by instances of the class
class Student {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    greet(){
        console.log("Hello")
    }
}
student = new Student("Max", 25, "max@lu.com");
console.log(Student.greet())

// closures in javascript
var addTo = function (passed) {
    var inner = 2;
    return passed + inner;
};
console.log(addTo(3));  // prints 5
