//Check what number mismatch from an array of number
//that are even or odd
export const wrongHood = (integers) => {
  return parseInt(
    integers
      .filter((x) =>
        integers.filter((xx) => xx % 2 === 0).length > 1
          ? x % 2 !== 0
          : x % 2 === 0
      )
      .join("")
  );
};
