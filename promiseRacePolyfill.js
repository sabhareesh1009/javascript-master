Function.prototype.myNewRace = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise got error");
  }, 500);
});

const promise5 = new Promise((resolve, reject) => {
  resolve("promise is good");
});

Promise.myNewRace([
  promise4,
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
