// Create a function in javascript which will take a nested object and a
//  filter function as input and return the filtered object.

function filterObject(object, test) {
  for (let key in object) {
    if (typeof object[key] === "object") {
      filterObject(object[key], test);
    } else {
      if (test(object[key]) === false) {
        delete object[key];
      }
    }
    if (JSON.stringify(object[key]) === "{}") {
      delete object[key];
    }
  }
}

const object = {
  a: 1,
  b: {
    c: "Hello World",
    d: 2,
    e: {
      f: {
        g: -4,
      },
    },
    h: "Good Night Moon",
  },
};

const filter = (s) => typeof s === "string";
filterObject(object, filter);
console.log(object);

/* Output:
{
  b: {
    c: "Hello World",
    h: "Good Night Moon",
  }
}; */
