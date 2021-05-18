//Check is a sentence or a word is a panagram(is contain all the letter of the english alphabeth)
//Ignore anything that is not a letter, that include space
export const isPanagram = (string) => {
  return new Set(string.replace(/\s/g, "").toLowerCase().split("")).size >= 26
    ? true
    : false;
};
