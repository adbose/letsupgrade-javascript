console.log("Comparison and logical operators");

/*
Comparison
1. >
2. <
3. >=
4. <=
5. == equals (value)
6. !=
7. === strict equality (type)
8. !== not strict 


Logical
1. and - &&
2. or ||
*/
console.log(null <= 0);
// why is that true when null >, <, or == 0 is false?
// the reason is that >= or <= converts into Number
// null <= 0 becomes Number(null) <= 0 wich is 0 <=0 which is true

console.log(null);
console.log(Number(null));  // result is 0

console.log(undefined);
console.log(Number(undefined));  // should output NaN

// lexicographical order
console.log("abce">"abd");  // false
console.log("abce">"abcd");  // true

// if else
marks = 5;
const grade =
  marks >= 75
    ? "A"
    : marks >= 50
    ? "B"
    : "C"
console.log(grade); // What's up?