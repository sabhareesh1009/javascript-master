// hosting

let a = 10;
function calc() {
  let a = 3;
  a++;
  console.log(a);
  function min() {
    let a = 6;
    console.log(a);
  }
  min();
}
calc();



