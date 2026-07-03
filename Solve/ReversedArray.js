const arr = [4, 5, 6, 8, 7, 9, 5, 4, 1, 0];
function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray(arr)); // time complexity O(n) , Space Complexity O(n)
