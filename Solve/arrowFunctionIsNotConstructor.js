// Arrow Function is Not a Constructor

// const Person = () => {
//   this.test = "Hello";
// };
// const result = new Person(); //type error: Person is not a constructor
// console.log(result.test);

function Person1() {
  this.test = "Hello";
}
const result1 = new Person1();
console.log(result1.test); //hello

// Why can't an arrow function be used as a constructor?

// Arrow functions do not have their own this, prototype, or the internal [[Construct]] method. Since the new operator requires [[Construct]] to create a new object, using new with an arrow function throws a TypeError.

function Person2() {
  this.name = "Anamul";

  return {
    name: "Stack Learner",
  };
}

const p = new Person2();

console.log(p.name); //Stack Learner

// Constructor যদি primitive return করে (number, string, boolean, null, undefined, symbol, bigint), তাহলে JavaScript তা ignore করে এবং this (নতুন তৈরি object) return করে।

function Person3() {
  this.name = "Anamul";

  return 100;
}

const p1 = new Person3();

console.log(p1.name); // "Anamul"

function Person() {
  this.name = "Anamul";
}

const p2 = Person();

console.log(p2);
