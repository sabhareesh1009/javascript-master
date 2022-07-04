// Given multiple dimensional arrays, create a filter function that takes a callback function as input and
// returns a new array with all elements that have passed the test implemented in the callback function.

function filterNestedAraay(array, filtered) {
  let output = [];
  for (let i of array) {
    if (filtered(i)) {
      output.push(i);
    } else if (Array.isArray(i)) {
      const newRes = filterNestedAraay(i, filtered);
      if (newRes.length) {
        output.push(newRes);
      }
    } else {
      continue;
    }
  }
  return output;
}

const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const filtered = filterNestedAraay(arr, (e) => typeof e === "string");
console.log(filtered);

/* Output:
[[[["foo"]],"bar"]] */

// Learner's buket solution

const filter = (arr, test) => {
  // Store the output
  const result = [];

  //iterate the array
  for (let a of arr) {
    //if sub-array
    if (Array.isArray(a)) {
      //recursively filter the sub-array
      const output = filter(a, test);

      //store the result
      result.push(output);
    } else {
      //if not an array
      //test the element
      //if it passes the test, store its result
      if (test(a)) {
        result.push(a);
      }
    }
  }

  //return the result
  return result;
};

// Filter polyfill

Array.prototype.multiFilter = function (test) {
  //original array;
  const originalArray = this;

  const filter = (arr, test) => {
    // Store the output
    const result = [];

    //iterate the array
    for (let a of arr) {
      //if sub-array
      if (Array.isArray(a)) {
        //recursively filter the sub-array
        const output = filter(a, test);

        //store the result
        result.push(output);
      } else {
        //if not an array
        //test the element
        //if it passes the test, store its result
        if (test(a)) {
          result.push(a);
        }
      }
    }

    //return the result
    return result;
  };

  //filter and return
  return filter(originalArray, test);
};
