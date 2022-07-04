
// flatening array with depth using Array.reduce function with recurssion 
function flatenArray(array, depth = Infinity) {
  let output = [];
  for(let i of array) {
    if (Array.isArray(i)) {
      if (depth > 0) {
        const value = flatenArray(i, depth-1);
        output = [...output, ...value];
      } else {
        output = [...output, i]
      }
    } else {
      output = [...output, i];
    }
  }
  return output
}


// flatening array with depth using Array.reduce function with recurssion 
function flattenArray(arr, depth) {
  return depth > 0 ? arr.reduce((acum, val) => {
   return acum.concat(Array.isArray(val) ? flattenArray(val, depth-1) : val)
 }, []) : arr.slice();     
};