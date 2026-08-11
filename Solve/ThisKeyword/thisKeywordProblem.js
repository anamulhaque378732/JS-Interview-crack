// ======================================================
// JavaScript Practice Problems
// Topics:
// Closure, this, bind(), call(), apply(), Arrow Function
// Difficulty: Easy → Medium → Hard → Interview
// ======================================================

// ======================================================
// 🟢 LEVEL 1 — EASY
// ======================================================

// Problem 1 — Basic this
// Output কী হবে?

const person1 = {
  name: "Anamul",

  printName: function () {
    console.log(this.name);
  },
};

person1.printName(); // Anamul

// ------------------------------------------------------

// Problem 2 — this with two objects
// Output কী হবে?

const user1 = {
  name: "Anamul",

  greet: function () {
    console.log(this.name);
  },
};

const user2 = {
  name: "Rahim",
};

user2.greet = user1.greet;

user1.greet(); // Anamul
user2.greet(); //Rahim

// ------------------------------------------------------

// Problem 3 — Basic call()
// Output কী হবে?

const person2 = {
  name: "Anamul",
};

function greet() {
  console.log(this.name);
}

greet.call(person2); // Anamul

// ------------------------------------------------------

// Problem 4 — call() with arguments
// Output কী হবে?

const person3 = {
  name: "Anamul",
};

function introduce(age, profession) {
  console.log(this.name, age, profession);
}

introduce.call(person3, 25, "Developer"); //Anamul , 25, Developer

// ------------------------------------------------------

// Problem 5 — apply()
// Output কী হবে?

const person4 = {
  name: "Anamul",
};

function introduceUser(age, city) {
  console.log(this.name, age, city);
}

introduceUser.apply(person4, [25, "Rajshahi"]); //Anamul , 25, Rajshahi

// ------------------------------------------------------

// Problem 6 — bind()
// Output কী হবে?

const person5 = {
  name: "Anamul",
};

function sayHello() {
  console.log(this.name);
}

const newFunction = sayHello.bind(person5);

newFunction(); //Anamul

// ------------------------------------------------------

// Problem 7 — Arrow Function
// Output কী হবে?

const person6 = {
  name: "Anamul",

  greet: () => {
    console.log(this.name);
  },
};

person6.greet(); // undefined

// ------------------------------------------------------

// Problem 8 — Regular function vs Arrow function
// Output কী হবে?

const person7 = {
  name: "Anamul",

  regular: function () {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  },
};

person7.regular(); //Anamul
person7.arrow(); //undefined

// ------------------------------------------------------

// Problem 9 — Basic Closure
// Output কী হবে?

function outer() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = outer();

counter1(); //1
counter1(); //2
counter1(); //3

// ------------------------------------------------------

// Problem 10 — Create a Counter
// নিজে createCounter() function তৈরি করো
//
// Expected:
//
// const counter = createCounter();
//
// counter(); // 1
// counter(); // 2
// counter(); // 3
//
// Hint:
// Closure ব্যবহার করবে।
// count variable বাইরে থেকে access করা যাবে না.

// ======================================================
// 🟡 LEVEL 2 — MEDIUM
// ======================================================

// Problem 11 — bind() with arguments
//
// Expected output:
//
// Hello, I am Anamul. I am 25 years old and I live in Rajshahi.
//
// নিচের function complete করো.

const user3 = {
  name: "Anamul",
  age: 25,
};

function greetUser(city, profession) {
  // Write your code
}

const greetUserFunction = greetUser.bind(user3);

greetUserFunction("Rajshahi", "Frontend Developer"); // console.log(`Hello, I am ${this.name}. I am ${this.age} years old I live in ${this.city})

// ------------------------------------------------------

// Problem 12 — call() with two objects
//
// Expected:
//
// Anamul 25
// Rahim 30

const employee1 = {
  name: "Anamul",
  age: 25,
};

const employee2 = {
  name: "Rahim",
  age: 30,
};

function introduceEmployee() {
  console.log(this.name, this.age);
}

// এখানে call() ব্যবহার করো

// introduceEmployee.call(employee1)
// introduceEmployee.call(employee2)

// Problem 13 — Method Borrowing
//
// person-এর introduce method ব্যবহার করে
// anotherPerson-এর information print করো.
//
// Expected:
//
// My name is Rahim

const person8 = {
  name: "Anamul",

  introduce: function () {
    console.log(`My name is ${this.name}`);
  },
};

const anotherPerson = {
  name: "Rahim",
};

// call() ব্যবহার করো

// ------------------------------------------------------

// Problem 14 — apply() + Math
//
// Array থেকে maximum number বের করো.
//
// Expected:
//
// 50

const numbers = [10, 20, 30, 40, 50];

// apply() ব্যবহার করো

// ------------------------------------------------------

// Problem 15 — Closure + Private Balance
//
// Expected:
//
// 1300
//
// account.balance সরাসরি access করা যাবে না.

const account = createAccount(1000);

// account.deposit(500);
// account.withdraw(200);
// console.log(account.getBalance());

// ------------------------------------------------------

// Problem 16 — Closure Counter
//
// Expected:
//
// 1
// 2
// 1
// 2

const counter2 = createCounter();

// counter2.increment();
// counter2.increment();
// counter2.decrement();
// counter2.increment();

// ------------------------------------------------------

// Problem 17 — Closure Greeting
//
// Expected:
//
// Hello Anamul
// Hello Rahim

// const greetAnamul = createGreeting("Anamul");
// const greetRahim = createGreeting("Rahim");

// greetAnamul();
// greetRahim();

// ------------------------------------------------------

// Problem 18 — bind() + Partial Application
//
// Expected:
//
// 10
// 20

function multiply(a, b) {
  return a * b;
}

// bind() ব্যবহার করে double function তৈরি করো.

// const double = ...

// console.log(double(5));
// console.log(double(10));

// ------------------------------------------------------

// Problem 19 — Constructor + new
//
// Person constructor তৈরি করো.
//
// তারপর new ব্যবহার করে দুইজন person তৈরি করো.
//
// Expected:
//
// Anamul 25
// Rahim 30

function Person(name, age) {
  // Write your code
}

// const personA = new Person("Anamul", 25);
// const personB = new Person("Rahim", 30);

// ------------------------------------------------------

// Problem 20 — this inside nested function
//
// Output কী হবে?
//
// তারপর code fix করো যেন output হয়:
//
// Anamul

const person9 = {
  name: "Anamul",

  greet: function () {
    function inner() {
      console.log(this.name);
    }

    inner();
  },
};

person9.greet();

// ======================================================
// 🔴 LEVEL 3 — HARD
// ======================================================

// Problem 21 — Arrow Function inside Method
//
// Output কী হবে?
// Explain why.

const person10 = {
  name: "Anamul",

  greet: function () {
    const inner = () => {
      console.log(this.name);
    };

    inner();
  },
};

person10.greet();

// ------------------------------------------------------

// Problem 22 — Regular vs Arrow inside Method
//
// Output predict করো.
//
// Regular:
// Arrow:

const person11 = {
  name: "Anamul",

  greet: function () {
    function regular() {
      console.log("Regular:", this.name);
    }

    const arrow = () => {
      console.log("Arrow:", this.name);
    };

    regular();
    arrow();
  },
};

person11.greet();

// ------------------------------------------------------

// Problem 23 — bind() দিয়ে lost this fix করো
//
// Expected:
//
// Anamul

const user4 = {
  name: "Anamul",

  greet: function () {
    console.log(this.name);
  },
};

const greetUser2 = user4.greet;

// greetUser2();

// bind() ব্যবহার করে fix করো.

// ------------------------------------------------------

// Problem 24 — Callback + this
//
// নিচের code-এ this কেন কাজ করছে না?
//
// 1. bind() দিয়ে fix করো
// 2. Arrow function দিয়ে fix করো

const user5 = {
  name: "Anamul",

  greet: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

// user5.greet();

// ------------------------------------------------------

// Problem 25 — Closure + var + loop
//
// Output কী হবে?

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// তারপর এমনভাবে fix করো যেন:
//
// 1
// 2
// 3
//
// output হয়.

// ------------------------------------------------------

// Problem 26 — Closure Function Factory
//
// createMultiplier() তৈরি করো.
//
// Expected:
//
// 10
// 30

// const multiplyBy5 = createMultiplier(5);
// const multiplyBy10 = createMultiplier(10);

// console.log(multiplyBy5(2));
// console.log(multiplyBy10(3));

// ======================================================
// 🔥 LEVEL 4 — INTERVIEW LEVEL
// ======================================================

// Problem 27 — Predict the Output
//
// চারটি output কী হবে?
// এবং প্রত্যেকটার কারণ explain করো.

const person12 = {
  name: "Anamul",

  regular: function () {
    console.log(this.name);
  },

  arrow: () => {
    console.log(this.name);
  },
};

const regularFunction = person12.regular;
const arrowFunction = person12.arrow;

regularFunction();
arrowFunction();

person12.regular();
person12.arrow();

// ------------------------------------------------------

// Problem 28 — bind() + call()
//
// Output কী হবে?
// Explain why.
//
// Hint:
// bind() করার পরে call() কি this পরিবর্তন করতে পারে?

const person13 = {
  name: "Anamul",
};

const person14 = {
  name: "Rahim",
};

function greetPerson() {
  console.log(this.name);
}

const boundGreet = greetPerson.bind(person13);

boundGreet.call(person14);

// ------------------------------------------------------

// Problem 29 — Closure + this + Arrow + new
//
// Explain:
//
// 1. new binding কোথায়?
// 2. this কোথায়?
// 3. Arrow function কেন কাজ করছে?
// 4. Lexical this কীভাবে কাজ করছে?

function Person2(name) {
  this.name = name;

  this.greet = function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  };
}

const person15 = new Person2("Anamul");

person15.greet();

// ------------------------------------------------------

// Problem 30 — FINAL CHALLENGE 🔥
//
// Closure + this + bind() + call()/apply() + Arrow Function
// সব ব্যবহার করতে হবে.
//
// Expected:
//
// Hi, I am Anamul. I am a Frontend Developer.
// My salary is 55000.
//
// salary বাইরে থেকে সরাসরি পরিবর্তন করা যাবে না.
//
// Example:
//
// const employee = createEmployee(
//   "Anamul",
//   "Frontend Developer",
//   50000
// );
//
// employee.introduce();
//
// employee.increaseSalary(5000);
//
// employee.showSalary();

// তোমার code এখানে লিখবে:

function createEmployee(name, position, salary) {
  // Write your solution
}

// ======================================================
// END
// ======================================================
