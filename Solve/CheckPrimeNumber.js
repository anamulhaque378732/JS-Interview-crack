// prime number check

function isPrime(num) {
  if (num < 2) return "Not Prime";
  if (num === 2) return "prime";
  if (num % 2 === 0) return "Not prime";
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return "not Prime";
  }
  return "prime";
} // time and Space complexity O(√n) and O(1)
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(9));
