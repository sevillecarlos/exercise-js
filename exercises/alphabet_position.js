//Check the position of the letter in the alphabet
export const alphabetPosition = (text) => {
  return text
    .split("")
    .filter((x) => /[a-zA-Z]/.test(x))
    .map((x) => x.toLowerCase().charCodeAt(0) - 96)
    .join(" ");
};

