//   ✅ Closure Counter
// ✅ Create Counter using Closure
// ✅ JavaScript Closure
// ✅ Private Variable using Closure
// ✅ Counter Function

// Normal local variable Function-এর execution context (short-lived)
//Closure variable Closure-এর lexical environment, যা engine প্রয়োজনে heap-এ রাখতে পারে

function createCounter() {
  let count = 0; // store lexical environment
  return function () {
    return ++count;
  };
}
console.log(createCounter());
