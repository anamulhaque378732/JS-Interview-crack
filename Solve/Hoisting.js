// Hoisting Interview Question
// ✅ Temporal Dead Zone (TDZ)
// ✅ let vs const vs var Hoisting
// ✅ JavaScript Execution Context

// var is hoisted and initialized with undefined, while let and const are hoisted but remain uninitialized in the Temporal Dead Zone (TDZ) until their declaration is executed. Accessing a let or const variable before initialization throws a ReferenceError.

// console.log(num); // cannot access num, Hoisted কিন্তু uninitialized (TDZ)
// console.log(num1); // cannot access  num1 ,Hoisted কিন্তু uninitialized (TDZ)
console.log(num2); // cannot access  num2, Hoisted এবং undefined
// let num = 0;
// const num1 = 0;
var num2 = 3; // hoisting
var a = 10;

function test() {
  console.log(a);
  var a = 20;
}

test();
