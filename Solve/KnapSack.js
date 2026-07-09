//  knapSack buji nai 

function knapSack(w, wt, val, n) {
  if (n === 0 || w === 0) return 0;

  if (wt[n - 1] > w) {
    return knapSack(w, wt, val, n - 1);
  } else
    return Math.max(
      val[n - 1] + knapSack(w - wt[n - 1], wt, val, n - 1),
      knapSack(w, wt, val, n - 1),
    );
}
let val = [60, 100, 120],
  wt = [10, 20, 30],
  w = 50,
  n = val.length;
console.log(knapSack(w, wt, val, n));
