//console.clear();
console.log("console log");
console.warn("console warn");
console.error("console error");
console.table({ name: "Ash", age: 30 });
console.assert(20 > 189, "Age >> 189 is not possible");

//Variables
//var - global level scope 
//let - block/ local level scope
//const - cannot allow to re-initialize the variable with a value
//const arr = [1,2,3,4];
//arr.push(5); //possible since it is adding a value to a variable, not re-initializing a variable
//arrays - []
//objects - {}

var nameVal = "Ash";
console.log(nameVal);

//Data Types
//1. Primitive data types (stack) - string, number, boolean, null, undefined, symbol
//2. Reference data type (Heap) - arrays, object literals, functions, dates

let name = "Harry";
console.log("My name is", name);
console.log("Data type is ", (typeof name)); // returns the data type of name which is a string

//Type Conversion 
let myVal;
myVal = 34;
myVal = String(34);
console.log(myVal, (typeof myVal));


