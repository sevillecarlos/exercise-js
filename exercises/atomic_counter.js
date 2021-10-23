const atomicCounter = (formula = "") => {
  const parseMap = new Map();
  for (let index = 0; index < formula.length; index++) {
    const element = formula[index];
    //set Elements symbol
    if (/[A-Z]/.test(element)) {
      const nextLetter = formula[index + 1];
      if (/[a-z]/.test(nextLetter)) {
        const element2 = `${element}${nextLetter}`;
        const elementNumber = parseInt(formula[formula.indexOf(nextLetter) + 1])
        if (parseMap.has(element2)) {
          if(elementNumber){
          parseMap.set(element2, parseMap.get(element2) + elementNumber);
              
          }else{
          parseMap.set(element2, parseMap.get(element2) + 1);
              
          }
        } else {
          parseMap.set(element2,  1);
        }
      } else {
        if (parseMap.has(element)) {
          parseMap.set(element, parseMap.get(element)++);
        } else {
          parseMap.set(element, 1);
        }
      }
    }
  }

  return parseMap;
};

const ans = atomicCounter("Mg[OH]2Mg8");

console.log(ans);
