// Scope

//Scope determines where a variable or function can be accessed in a program

// type of scope (3 types)
/**
 * 1. Global scope
 * 2. Function Scope
 * 3. Block scope
 */
// var can not follow block scope

// difference between function scope and block scope

//Function Scope means variables declared inside a function can only be accessed within that function.

//Block Scope means variables declared with let or const inside a block {} can only be accessed within that block.

// Function Scope means a variable declared with var inside a function is accessible anywhere within that function but not outside it. Block Scope means a variable declared with let or const is accessible only inside the block {} where it is declared.
let x = 10;

function test() {
  console.log(x); // ?

  if (true) {
    let x = 20;
    console.log(x); // ?
  }

  console.log(x); // ?
}

test();
