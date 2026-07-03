function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([4, 22, 35, 65], 22)); // time complexity O(1), space complexity O(n)
