// insertion sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

//console.log(insertionSort2([6, 5, 6, 4, 7, 8, 9, 1, 3])); //[9, 8, 7, 6, 6, 5, 4, 3, 1] // time complexity O(n**2) , space complexity O(1)

console.log(insertionSort([-2, 4, -3, 6, 8, -1]));
