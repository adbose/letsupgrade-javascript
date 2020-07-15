# Data Types in JavaScript

In JavaScript, a variable may store two types of values: primitive and reference.

## Primitive Data Types
The following data types can be classified under primitive data types:
- **Number**: `let n = 25;`
- **String**: `let s = "Apple";`
- **Boolean**: `let b = true;`
- **BigInt**: `let bignum = 1234567890n;`
- **null**: `let nu = null;`
- **undefined**: `let un = undefined;`
The size of a primitive value is fixed, therefore, JavaScript stores the primitive value on the _stack_.
If the value is a primitive value, when you access the variable, you manipulate the actual value stored in that variable. In other words, the variable that stores a primitive value is **accessed by value**.

## Reference Data Types
Variables that are assigned a non-primitive value are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value.
The size of a reference value is dynamic so JavaScript stores the reference value on the heap.
Examples of such data types are **Arrays**, **Functions**, and **Objects**. 