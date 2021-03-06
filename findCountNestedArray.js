// Given a nested array and a callback function,
// count all the elements that pass the test in the callback and return the count.

function findCount(array, test) {
  let count = 0;
  for (let i of array) {
    if (test(i)) {
      count++;
    } else if (Array.isArray(i)) {
      count = count + findCount(i, test);
    } else {
      continue;
    }
  }
  return count;
}

const arr = [[1, [2, [3, 4, "foo", { a: 1, b: 2 }, 5]], "bar"]];

// Learner bucket solution:

let countInArray = function (inputArr, test) {
  //track the count
  let count = 0;

  const search = (arr, test) => {
    //iterate the array
    for (let a of arr) {
      //if not an array
      //test the element
      //if it passes the test, store its result
      if (test(a)) {
        count += 1;
      }

      //if sub-array
      if (Array.isArray(a)) {
        //recursively filter the sub-array
        search(a, test);
      }
    }
  };

  //search
  search(inputArr, test);

  //return
  return count;
};
