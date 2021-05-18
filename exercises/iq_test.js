//Find out which one of the given
// numbers separte by space differs from the others
export const iqTest = (numbers) => {
  const arrOdd = [];
  const arrEven = [];
  const arrNumbers = numbers.split(" ");
  arrNumbers.map((x) => {
    x % 2 == 0 ? arrEven.push(x) : arrOdd.push(x);
  });
  return (
    arrNumbers.indexOf(
      arrOdd.length < arrEven.length ? arrOdd[0] : arrEven[0]
    ) + 1
  );
};
