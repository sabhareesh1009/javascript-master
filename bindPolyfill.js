let transaction = {
  sender: "sabhareesh",
  receiver: "sandeep",
  amount: 1000,
};
console.log(transaction);
function printTransDetails(card) {
  console.log(this.sender, this.receiver, this.amount, card);
}

// Actual bind methos
//const newPrintTransc = printTransDetails.bind(transaction, "credit card");

// polyfill for the bind with call
// Function.prototype.newBind = function (...args) {
//   let printTransDetailsObj = this;
//   params = args[1];
//   return function () {
//     printTransDetailsObj.call(args[0], params);
//   };
// };

// const polyfillBindTransc = printTransDetails.newBind(transaction, "debit card");
// polyfillBindTransc();

// polyfill for the bind with apply
// Function.prototype.newBind = function (...args) {
//   let printTransDetailsObj = this;
//   params = args.slice(1);
//   return function () {
//     printTransDetailsObj.call(args[0], params);
//   };
// };

// const polyfillBindTransc = printTransDetails.newBind(transaction, "debit card");
// polyfillBindTransc();

// polyfill for the bind with apply and the new call will also params then
Function.prototype.newBind = function (...args) {
  let printTransDetailsObj = this;
  params = args.slice(1);
  return function (...arg2) {
    printTransDetailsObj.apply(args[0], [...params, ...arg2]);
  };
};

const polyfillBindTransc = printTransDetails.newBind(transaction, "debit card");
polyfillBindTransc("sucess");



Function.prototype.calllBind = function(...args) {
  let printDetails = this;
  const params = args.slice(1);
  return function() {
    printDetails.call(arg[0], params);
  }
}

Function.prototype.applyBind = function(...args) {
  let printDetails = this;
  const params = args.slice(1);
  return function(...args2) {
    printDetails.apply(arg[0], [...params,...args2]);
  }
}


const newBindFunction = somefunction.applybind(justObj);

newBindFunction('hey', 'cool')
