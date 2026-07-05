//majority of element

function majorityElement(arr) {
  let count = 0,
    candidate = null;

  for (let num of arr) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}
console.log(majorityElement([4, 5, 6, 7, 8, 4, 5, 47, 5, 6, 5, 4, 5]));

console.log(majorityElement([1, 2, 3, 4, 5, 6, 7, 8, 9]));
