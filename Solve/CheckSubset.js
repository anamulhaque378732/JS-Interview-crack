// is subset check

function isSubset(arr1, arr2) {
  let set = new Set(arr1);

  for (let num of arr2) {
    if (!set.has(num)) return false;
  }

  return true;
} // time complexity o(n), space complexity O(n)
console.log(isSubset([1, 2, 3], [1, 2, 5]));
console.log(isSubset([1, 2, 3], [1, 3]));
console.log(isSubset([1, 2, 3], [1, 2, 3, 3, 3]));
console.log(isSubset([1, 2, 3], []));
