// execution context
//what is execution context

// Execution Context is the environment where JavaScript executes code. It contains everything needed to run the code, such as variables, functions, and the value of this.

// type of execution context
// 1. Global execution context (GEC) its create when code execute
// 2. function execution context (FEC) , its create when you invoked function or call function
// 3. (Modern JavaScript also has Eval Execution Context, but it's rarely used.)

// Phase of execution context
// 1. Memory creation phase
// 2. Execution phase

// memory creation phase

let a = 10; //undefined / not assign
function test() {} //test--> function
let b = 20; // undefined / not assign

// execution phase
// a = 10
// function test(){}
// b = 20

// node.js is javascript runtime

// interpretation : Easy to debug, but slow process
// compilation: Fast process but System crash & hard to debug

// *** Modern JavaScript is neither purely interpreted nor purely compiled. JavaScript engines (like V8) use Just-In-Time (JIT) compilation.

// Modern JavaScript is both interpreted and compiled. JavaScript engines like V8 first interpret the code into bytecode and then use Just-In-Time (JIT) compilation to optimize frequently executed code into machine code.

console.log(a); //undefined
console.log(b); // reference error
var a = 10;
let b = 20;
function hello() {
  var meg = "Hallow world";
}

hello();
console.log(meg); // reference error
