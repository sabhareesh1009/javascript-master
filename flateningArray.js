const array = [
  [2, 3, "fgg", [4, "dff", [3]], 4, 7],
  9,
  "w",
  [35, 78, ["red"], [["dsa", 5, "rew"], 34, 78]],
];

function flatArray(arr, d = 1) {
  const flatArry = arr.filter((elm) => !Array.isArray(elm));
  if (flatenArray.length) {
  }
}

const findNumCount = (array) => {
  let flatenArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray(array[i], flatenArray);
    }
  }
};
