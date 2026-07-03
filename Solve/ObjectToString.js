const obj = {
  name: "Anamul",
  age: 26,
};

const str = JSON.stringify(obj);
console.log(str);
const str2 = '{"name":"Anamul", "age":25}';

console.log(JSON.parse(str2));

const obj2 = {
  name: "Adam",
  age: undefined,
};

console.log(JSON.stringify(obj2)); // undefined property remove kore dey
