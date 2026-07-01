//  Swap Array Elements ✅ (most common)
// Swap Two Elements
// Array Element Swapping
// Swap Elements at Given Indices
// Swap Values in an Array

const arr = [1, 2, 3, 4, 5, 6];

// related  common question
let num1 = 10;
let num2 = 20;
[num1, num2] = [num2, num1];
console.log(num1, num2);

const swapElements = (arr, index1, index2) => {
  if (
    index1 >= 0 &&
    index1 < arr.length &&
    index2 >= 0 &&
    index2 < arr.length
  ) {
    // right process

    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    // wrong process
    // arr[index1] = arr[index2]; //lost arr[1]
    // arr[index2] = arr[index1];
  }

  return arr;
};
console.log(swapElements(arr, 1, 4));
