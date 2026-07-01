// Get String Length and Uppercase

const str = "stack learner";

function getLengthAndUpperCases(str) {
  let length = str.length;
  let upperCases = str.toUpperCase();
  let trim = str.trim(); // you can remove  white space  you use trim
  return { length, upperCases, trim };
}

console.log(getLengthAndUpperCases(str));
