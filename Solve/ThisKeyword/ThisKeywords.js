// implicit binding : Implicit binding happens when a function is called as a method of an object. In that case, this refers to the object before the dot.

var printPlayerName = function (name) {
  console.log(name);
};

// printPlayerName("Ana");

var ana = {
  name: "ana",
  age: 25,
  printPlayerName: function () {
    console.log(this.name);
  },
};
var ana2 = {
  name: "ana2",
  age: 25,
  printPlayerName: function () {
    console.log(this.name);
  },
};

// ana.printPlayerName(); // Dot (.)-এর আগে যে object থাকে, implicit binding-এ this সাধারণত সেই object-কে refer করে।

let playerNameFunction = function (obj) {
  obj.printPlayerName2 = function () {
    console.log(this.name);
  };
};

playerNameFunction(ana);
playerNameFunction(ana2);

// ana.printPlayerName2(); // this--> ana
// ana2.printPlayerName2(); // this --> ana2

let person = function (name, age) {
  return {
    name: name,
    age: age,
    printName: function () {
      console.log(this.name);
    },

    father: {
      name: "Mr. XX",
      printName: function () {
        console.log(this.name);
      },
    },
  };
};

let jonDoe = person("jonDoe", 35);

// jonDoe.printName(); // object denote by jonDoe
// jonDoe.father.printName(); // this --> Mr. XX

// Explicit binding : Explicit binding occurs when we manually set the value of this using call(), apply(), or bind().

let printName = function (v1, v2) {
  console.log(`${this.name} ${v1} ${v2}  ${v3}`);
};

let city = {
  name: "dhaka",
  age: 150,
};
let v1 = "clean";
let v2 = "suitable for work ";
let v3 = "Suitable for stay";

// printName.call(city, v1, v2, v3); // call only take one variable , then one , then one

let newFuc = printName.bind(city, v1, v2, v3);
// newFuc();

let v = [v1, v2, v3];

// printName.apply(city, v); // apply()  take an array

// new binding: New binding occurs when a function is called with the new keyword. JavaScript creates a new object, and this inside the function refers to that newly created object.

function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(`${this.name} is ${this.age} years old`);

  //   return this
}

// let Ana = new Person("Ana", 35);

// window binding : Default binding happens when a regular function is called without an object, call, apply, bind, or new. In browsers, this is window in non-strict mode, while in strict mode it is undefined.

let printAna = function () {
  console.log(this.name);
};

let ana3 = {
  name: "Ana",
};

printAna(); // window binding
