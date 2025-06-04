function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function SumOfSomething(a, b, callbackfn) {
  let square1 = callbackfn(a);
  let square2 = callbackfn(b);
  return square1 + square2;
}
let ans = SumOfSomething(2, 3, square);
console.log(ans);
