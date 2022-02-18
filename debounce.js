function getItems(value) {
  console.log(value);
}

function debounce(callback, delay) {
  let timer;
  return function () {
    const context = this;
    const value = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (timer) clearTimeout(timer);
      callback.apply(context, arguments);
    }, delay);
  };
}

const optimizedItems = debounce(getItems, 1000);
const intputElement = document.getElementById("debounceSearch");
intputElement.addEventListener("keyup", (e) => {
  optimizedItems(e.target.value);
});
