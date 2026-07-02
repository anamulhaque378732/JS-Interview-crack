// ✅ Lexical Scope
// ✅ Block Scope
// ✅ Variable Shadowing
// ✅ Hoisting with let
// ✅ Execution Context

function getData() {
  let a = 500;
  console.log(a);
}

// getData();
let a;
// console.log(a); //undefined

function getData2() {
  console.log(b);
}
let b = 500; // access this data
getData2();

// let b = 500; // cannot access
