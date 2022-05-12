// hosting

// let a = 10;
// function calc() {
//   let a = 3;
//   a++;
//   console.log(a);
//   function min() {
//     let a = 6;
//     console.log(a);
//   }
//   min();
// }
// calc();

document.querySelector('#grand-parent').addEventListener('click', ()=> {
  console.log("grand parent clicked")
}, true);

document.querySelector('#parent').addEventListener('click', ()=> {
  console.log(" parent clicked")
}, true);

document.querySelector('#child').addEventListener('click', ()=> {
  console.log(" child clicked")
}, true);



