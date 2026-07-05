// remove duplicate in an array

const arr = [11, 21, 3, 5, 2, 6, 4, 8, 8, 9, 9, 10, 10, 11, 12, 12];
function removeDuplicate(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

// console.log(removeDuplicate(arr)); // time complexity o(n**2) space complexity o(n)

const unique = [...new Set(arr)]; // time and space complexity O(n) , O(n)

// console.log(unique);

// use only for loop, without include and Set function

function removeDuplicate2(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    // unique array-তে আগে থেকেই আছে কি না check করো

    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

// console.log(
//   removeDuplicate2([11, 21, 3, 5, 2, 6, 4, 8, 8, 9, 9, 10, 10, 11, 12, 12]),
// ); // time and space complexity O(n**2) and O(n)

//Extra Array-ও ব্যবহার করা যাবে না।

//তখন Two Pointer technique ব্যবহার করতে হবে (sorted array-এর জন্য)।

function removeDuplicate(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return arr.slice(0, i + 1);
}

// console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 4, 5]));
