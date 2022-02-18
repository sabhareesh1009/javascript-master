const productA = {
  name: "zkart",
  price: 2000,
  getVersions: function () {
    console.log(this.name, this.price);
  },
};

/* call method */
// call method is used for function borrowing
const productB = {
  name: "flikKart",
  price: 10000,
};

productA.getVersions.call();


// getting seperate from seperate fucntions from
function printSomething(version, address) {
  console.log(this.name, this.price, version, address);
}

/* Apply method */
// getting seperate from seperate fucntions from
function printSomething(...args) {
  console.log(args);
  // console.log(this.name, this.price, version, address);
}
// printSomething.call(productB, 2);
// if are having more than one arugument than we can use apply method

printSomething.apply(productB, [4, "blr"]);

/* bind method */
// bind also like call method but it will return the function intead of calling
let printMyDetails = printSomething.bind(productB, [4, "blr"]);

console.log(printMyDetails)
printMyDetails();

