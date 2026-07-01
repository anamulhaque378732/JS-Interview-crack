function outer() {
  let x = 5;

  return function () {
    x++;
    console.log(x);
  };
}

const fn = outer();

// fn(); //6
// fn(); //8
// fn(); //7

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
