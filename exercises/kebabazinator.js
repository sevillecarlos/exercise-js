//Convert a camelCase name convention to a kebab name convention

export const kebabizinator = (str) => {
  return str
    .replace(/\d+/g, "")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
};
