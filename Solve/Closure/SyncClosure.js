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

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

let num1 = 2;
let num2 = 12;
const sum = function () {
  // simple closure
  return num1 + num2;
};

const sum2 = function () {
  // closure
  let num2 = 3;
  return function () {
    return num1 + num2;
  };
};

const sum3 = function () {
  // not closure
  let num2 = 3;
  let num = 6;
  return function () {
    return num1; // did not use num2, num
  };
};

const myFunc = sum2();
const myFunc2 = sum3();
// console.dir(myFunc);
// console.dir(myFunc2);

function bankAccount(initialBalance) {
  let balance = initialBalance;
  return function () {
    return balance;
  };
}

const account = bankAccount(100000);
// console.dir(account);

(function () {
  let num1 = 2;
  let sum = function () {
    let num2 = 3;
    return num1 + num2;
  };
  console.dir(sum);
}); //();

(function () {
  let num4 = 12;
  let num5 = 15;

  function sum4() {
    return num4 + num5;
  }
  console.log(sum4());
  console.dir(sum4);

  num4 = 63;
  num5 = 65;

  console.log(sum4());
  console.dir(sum4);
}); //();

function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 1000000; i++) {
  var a = Math.random() * 1000000;
}
timer();
console.dir(timer);
timer = null;
// timer();
