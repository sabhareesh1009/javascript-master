function flatArray(array, depth = Infinity) {
  let stack = 0;
  while (array.length) {
    const elem = array.pop();
    if (Array.isArray(elem)) {
      array = [...array, ...elem];
      while (elem.length) {
        const elem2 = array.pop();
      }
    } else {
      stack.push(elem);
    }
  }
  return array.reverse();
}
