// Function Hoisting
// ✅ Function Declaration vs Variable Hoisting
// ✅ Hoisting Priority
// ✅ Function vs Variable Declaration

// order: Function Declaration --> var Declaration -> Execution

// function abc() {
//   return "test";
// }

// var abc;
// console.log(abc);

console.log(foo);

var foo = 10;

function foo() {
  return 20;
}
