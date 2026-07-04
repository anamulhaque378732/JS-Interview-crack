// return max number of an array

const arr = [1, 2, 5, 68, 6, 4, 7, 9, 7, 13, 100];

function findMax(arr) {
  if (arr.length === 0) return undefined;
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(findMax(arr)); // time complexity O(n) space complexity o(1)
// return min of array

function findMin(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin(arr));
