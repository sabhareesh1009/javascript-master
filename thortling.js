function getItems(value) {
  console.log(value);
}
let timer;
let counter = 0;
function throtling(callback, delay) {
  const context = this;
  const value = arguments;
  return function () {
    if (timer !== undefined || counter === 0) {
      counter++;
      timer = setTimeout(() => {
        if (timer) clearTimeout(timer);
        callback.apply(context, arguments);
      }, delay);
    }
  };
}

const optimizedItems = throtling(getItems, 1000);
const intputElement = document.getElementById("debounceSearch");
intputElement.addEventListener("keyup", (e) => {
  optimizedItems(e.target.value);
});
