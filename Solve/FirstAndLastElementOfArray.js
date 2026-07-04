//get First And Last Element Of Array

function getFirstAndLastElementOfArray(arr) {
  if (arr.length === 0) {
    return null;
  } else {
    return [arr[0], arr[arr.length - 1]];
  }
}
console.log(
  getFirstAndLastElementOfArray([9, 2, 66, 7, 8, 9, 4, 5, 4, 54, 6, 5]),
);
