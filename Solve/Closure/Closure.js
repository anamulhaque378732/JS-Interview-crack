// closure

// A closure is a function that remembers and can access variables from its outer lexical scope, even after the outer function has finished executing.

// A closure is created when an inner function remembers variables from its outer function even after the outer function has finished execution.

function outer() {
  let x = 5;

  return function () {
    x++;

    console.log(x);
  };
}

const fn = outer();

// fn(); //6
// fn(); //8
// fn(); //7

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
