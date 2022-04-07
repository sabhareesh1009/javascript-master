Function.prototype.myPromiseAll = function (promises) {
  let count = 0;
  const resolvedValues = [];
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          resolvedValues.push(value);
          count++;
          if (count === promises.length) {
            resolve(resolvedValues);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

const promise4 = new Promise((resolve, reject) => {
  reject("promise got error");
});

const promise5 = new Promise((resolve, reject) => {
  resolve("promise is good");
});

Promise.myPromiseAll([
  Promise.resolve(55),
  Promise.resolve(5),
  promise5,
  Promise.resolve(66),
  promise4,
])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });
