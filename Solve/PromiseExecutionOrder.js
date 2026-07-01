// Promise Execution Order
// JavaScript Event Loop Interview Question
// Promise Execution Order
// Microtask Queue Execution
// Promise Resolution Order
// Async JavaScript Execution Order

// new Promise()-এর executor function synchronous নাকি asynchronous?
// ✅ Synchronous
// resolve() কি .then()-কে সঙ্গে সঙ্গে execute করে?
// ❌ না। .then() callback Microtask Queue-তে যায়।
// Promise.then() callback কোথায় যায়?
// ✅ Microtask Queue
// একই সময়ে একাধিক microtask থাকলে কোনটা আগে execute হয়?
// ✅ FIFO (First In, First Out)

new Promise((resolve) => {
  resolve("First promise");
  Promise.resolve().then(() => {
    console.log("Second promise");
  });
}).then((data) => {
  console.log(data);
});
