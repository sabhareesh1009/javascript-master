//sum(2)(3)(4)....()

function sumVerse(a) {
  let sum = a;
  return function (b) {
    if (b !== undefined) {
      sum = sum + b;
      return sumVerse(sum);
    }
    return sum;
  };
}

console.log(sumVerse(2)(4)(5)(4)(10)(11)());
