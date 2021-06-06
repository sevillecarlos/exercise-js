//A hashtag generator 
export const generateHashtag = (str)  => {
  return str.trim().length === 0 || str.trim().replace(/\s/g, "").length >= 140
    ? false
    : "#".concat(
        str
          .split(" ")
          .filter((x) => x)
          .map((x) => {
            return `${x[0].toUpperCase() + x.slice(1, x.length)}`;
          })
          .join("")
      );
};
