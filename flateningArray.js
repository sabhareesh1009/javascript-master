const array = [
  [2, 3, "fgg", [4, "dff", [3]], 4, 7],
  9,
  "w",
  [35, 78, ["red"], [["dsa", 5, "rew"], 34, 78]],
];

function flatenArray(array) {
	let output = [];
  for(let i of array) {
  	if (Array.isArray(i)) {
    	const value = flatenArray(i);
      output = [...output, ...value];
    } else {
    	output = [...output, i];
    }
  }
  return output
} 

const arr = [1, 2, [3, 4, [5, 6, [10,[4,6,[9,10],1, 4,[5,6]]]]],[3,[10,[11]]]];
console.log(flatenArray(arr))
