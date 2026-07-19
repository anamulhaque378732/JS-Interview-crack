// Call stack
//The Call Stack is a data structure that keeps track of function calls in JavaScript. It follows the Last In, First Out (LIFO) principle.
console.log("Start");

function first() {
  console.log("First");

  second();

  console.log("First End");
}

function second() {
  console.log("Second");
}

first();

console.log("End");

// Start, First, Second, First End, End
