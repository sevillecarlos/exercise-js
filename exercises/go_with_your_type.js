//Separate number and letter from string without REGEX
export const goWithYourType = (str) => {
  return [
    str
      .split("")
      .map((el) => (parseInt(el) ? el : "*"))
      .map(parseInt)
      .join("")
      .split(NaN)
      .filter((x) => x)
      .map((x) => parseInt(x)),
    str
      .split("")
      .map((el) => (parseInt(el) ? "*" : el))
      .join("")
      .split("*")
      .filter((x) => x),
  ];
};

