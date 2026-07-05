// has duplicate

const arr1 = [1, 2, 5, 5, 6, 4, 8, 6, 89, 8, 46, 4, 6, 4];
const arr2 = [5, 6, 4, 5, 4, 58, 4, 8, 9, 5, 46, 9, 9];

function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
} // time and space complexity o(n**2) and O(1)
console.log(hasDuplicate(arr1));
console.log(hasDuplicate(arr2));

function hasDuplicate2(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
} // time and space complexity O(n) and O(n)

console.log(hasDuplicate2(arr1));
