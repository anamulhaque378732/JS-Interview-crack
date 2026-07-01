// ✅ Floating Point Precision
// ✅ IEEE 754 Floating Point Problem
// ✅ Floating Point Arithmetic
// ✅ Decimal Precision Error

console.log(0.1 + 0.2); //0.12000000000000001
console.log((0.1 + 0.2).toFixed(2)); //0.12
const result = Number((0.1 + 0.02).toFixed(2));

console.log(result);
console.log(0.1 + 0.2 === 0.3); //false
