
// coin change problem

function count(conis, n, sum) {
  if (sum === 0) return 1;

  if (sum < 0) return 0;

  if (n <= 0) return 0;

  return count(conis, n - 1, sum) + count(conis, n, sum - conis[n - 1]);
}
let conis = [1, 2, 3],
  n = conis.length
console.log(count(conis, n, 10));
