const atomicCounter = (formula = "") => {
  const parseMap = new Map();
  for (let index = 0; index < formula.length; index++) {
    const element = formula[index];
    //set Elements symbol
    if (/[A-Z]/.test(element)) {
      const nextLetter = formula[index + 1];
      if (/[a-z]/.test(nextLetter)) {
        parseMap.set(`${element}${nextLetter}`, 1);
      } else {
        parseMap.set(element, 1);
      }
    }
  }

  return parseMap;
};

const ans = atomicCounter("Mg[OH]2");

console.log(ans);
