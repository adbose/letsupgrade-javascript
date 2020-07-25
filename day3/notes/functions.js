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
