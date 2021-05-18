//Compare array1 and array2 have same element
//Return the elements that are the same
export const compareArray = (array1, array2) => {
  return array1.filter((el) => array2.includes(el));
};
