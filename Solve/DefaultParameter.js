//default parameter

// null default value trigger করে না।

// Default parameters are used only when the argument is undefined (or omitted). Passing null does not trigger the default value because null is considered an explicit value.

function add(a = 15, b = 20) {
  console.log(a + b);
}
// add(null, 60); //60
// add(null, null); // 0
// add(30, null); // 30
// add(); // 35
// add(false, true); // 1
// add(false, false); // 0
// add(true, false); //1
// add(true, true); // 2
add(undefined, undefined); //35
add(undefined); //35
