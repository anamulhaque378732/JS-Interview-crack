//Subset Some problem

let set = [3, 34, 4, 12, 5, 2],
  sum = 11,
  n = set.length;

function isSubsetSum(set, n, sum) {
  if (sum === 0) return true;
  if (n === 0 && sum !== 0) return false;
  if (set[n - 1] > sum) return isSubsetSum(set, n - 1, sum);

  return (
    isSubsetSum(set, n - 1, sum) || isSubsetSum(set, n - 1, sum - set[n - 1])
  );
} //time complexity O(2**n) space complexity O(n)
console.log(isSubsetSum(set, n, sum));
