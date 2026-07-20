//   ✅ Closure Counter
// ✅ Create Counter using Closure
// ✅ JavaScript Closure
// ✅ Private Variable using Closure
// ✅ Counter Function

// Normal local variable Function-এর execution context (short-lived)
//Closure variable Closure-এর lexical environment, যা engine প্রয়োজনে heap-এ রাখতে পারে

// Lexical Scope means a function can access variables from its own scope and its outer (parent) scope based on where the function is defined in the code.

// JavaScript uses where a function is defined, not where it is called.

// Lexical Scope means JavaScript determines variable accessibility based on where functions are defined in the source code, not where they are called.

function createCounter() {
  let count = 0; // store lexical environment
  return function () {
    return ++count;
  };
}
console.log(createCounter());
