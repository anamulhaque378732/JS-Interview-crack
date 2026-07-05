// find sum pairs

function findSumPairs(arr, sum) {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }
  return pairs;
} // time and space complexity O(n**2) and o(k) k= pair of number

console.log(findSumPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(findSumPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
console.log(findSumPairs([1, 2, 3, 4, 5, 6, 7, 8, 9], 30));

function findUniquePairs(arr, target) {
  const seen = new Set();
  const used = new Set();
  const result = [];

  for (const num of arr) {
    const complement = target - num;

    if (seen.has(complement)) {
      const a = Math.min(num, complement);
      const b = Math.max(num, complement);

      const key = `${a},${b}`;

      if (!used.has(key)) {
        used.add(key);
        result.push([a, b]);
      }
    }

    seen.add(num);
  }

  return result;
} // time and space complexity O(n**2) and o(n)

console.log(findUniquePairs([1, 1, 4, 4], 5));

function findSumPairs2(arr, sum) {
  const pairs = [];
  const uniquePairs = new Set();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        // ছোট সংখ্যাটি আগে রাখছি
        const a = Math.min(arr[i], arr[j]);
        const b = Math.max(arr[i], arr[j]);

        const key = `${a},${b}`;

        if (!uniquePairs.has(key)) {
          uniquePairs.add(key);
          pairs.push([a, b]);
        }
      }
    }
  }

  return pairs;
} // time and space complexity O(n) and o(n)

console.log(findSumPairs2([1, 1, 4, 4], 5));
