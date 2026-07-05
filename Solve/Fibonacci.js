// fibonacci

function fibonacci(n) {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
} // time and space complexity O(2**n) and O(n)

console.log(fibonacci(5)); //0,1,1,2,3,(5)
console.log(fibonacci(7)); //0, 1, 1, 2, 3, 5,8,(13);
console.log(fibonacci(45)); //
