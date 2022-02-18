// function currying is currying the functions by preseting arguments and use that function
// function currying can be achieved by using bind and also by using clousers

// by using bind
const multiply = (a, b) => {
  console.log(a * b);
};

const multiplyTwo = multiply.bind(this, 2);
const multiplyThree = multiply.bind(this, 3);

multiplyTwo(5);
multiplyThree(15);

// by using clousers
const multiply = (a) => {
  return function (y) {
    console.log(a * b);
  };
};

const multiplyTwo = multiply(2);
const multiplyThree = multiply(3);
multiplyTwo(5);
multiplyThree(15);
