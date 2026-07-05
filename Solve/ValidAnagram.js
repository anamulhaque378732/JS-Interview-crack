// valid anagram

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let sortedStr1 = str1.split("").sort().join("");

  let sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
} // time and space complexity O(1) and o(n log n)

// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("lisne", "silet"));
console.log(isAnagram("Dormitory", "Dirty Room"));

// Can you solve it without sorting?

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const count = {};

  for (let ch of str1) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (let ch of str2) {
    if (!count[ch]) return false;
    count[ch]--;
  }

  return true;
}
