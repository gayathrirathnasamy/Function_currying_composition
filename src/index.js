import "./styles.css";
//Function CUrrying
let sum = (x) => (y) => (z) => x + y + z;

let sumCurrying = (...x) => (...y) => {
  if (y.length) {
    return sumCurrying(
      x.reduce((acc, i) => {
        acc = acc + i;
        return acc;
      }, 0) +
        y.reduce((acc, i) => {
          acc = acc + i;
          return acc;
        }, 0)
    );
  } else {
    return x;
  }
};

//(y ? sumCurrying(x + y) : x);

console.log(sumCurrying(5, 10)(6, 8)(7, 11, 13, 15)(9)());
document.getElementById("app").innerHTML = sum(3)(4)(5);

//Function Composition
let compose = (...fns) => (args) => {
  return fns.reduceRight((acc, fn) => fn(acc), args);
};

let fn1 = (y) => 10 + y;
let fn2 = (x) => x * x;

console.log(compose(fn1, fn2)(2));
