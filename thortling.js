function getItems(value) {
  console.log(value);
}
let timer;
let counter = 0;
function throtling(callback, delay) {
  let flag = true;
  return function () {
    const context = this;
    const value = arguments;
    if (flag) {
      flag = false;
      getItems.apply(context, arguments);
    }
    setTimeout(() => {
      flag = true;
    }, delay);
  };
}

const optimizedItems = throtling(getItems, 1000);
const intputElement = document.getElementById("debounceSearch");
intputElement.addEventListener("keyup", (e) => {
  optimizedItems(e.target.value);
});
