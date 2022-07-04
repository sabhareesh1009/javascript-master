// Given an nested object which can have
// any type of object, deep flatten it and return the new object in Javascript.

const deepFlatenObject = function (obj, prefix) {
  let output = {};
  for (let key in obj) {
    const val = obj[key];
    const newKey = prefix ? prefix + "." + key : key;
    if (typeof val === "object") {
      if (Array.isArray(val)) {
        const { ...arrayToObj } = val;
        const newObj = deepFlatenObject(arrayToObj, newKey);
        output = { ...output, ...newObj };
      } else {
        const newObj = deepFlatenObject(val, newKey);
        output = { ...output, ...newObj };
      }
    } else {
      output = { ...output, [newKey]: val };
    }
  }
  return output;
};

const input = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};
console.log(deepFlatenObject(input));

/* Output:
  {
    "A": "12"
    "B": 23,
    "C.O.L": 56,
    "C.P": 23,
    "C.Q.0": 1,
    "C.Q.1": 2,
  } */
