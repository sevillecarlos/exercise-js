import { expect } from "@jest/globals";
import { compareArray } from "../exercises/compare_elements_array";

test("Compare array1 and array2 have same element", () => {
  expect(
    compareArray(
      [1, 2, 3, 34, 45, 6, 67, 8, 89, 5, 56, 56],
      [1, 645, 457, 45654, 7, 4345, 34, 734, 5345, 34412]
    )
  ).toStrictEqual([1, 34]);
});

test("Compare array1 and array2 have same element", () => {
  expect(
    compareArray(
      [
        "zzxxxxxxxxxccccc",
        "zxccccccccczxxzxzxzx",
        "zxczxxzxzcxzzxxxxxxxccc",
        "cxzcxzcxzczxcxz",
        "zxczxzzzzzcxzxxcccc",
        "zzxzxzxzx",
      ],
      [
        "zxczxczxczxczxcxz",
        "zczxcxzczxcxzczxcczx",
        "zxcxzcxzczxc",
        "zxcxzc",
        "zxzcx",
        "zxzxzx",
        "zzxczxc",
        "zzxzxzxzx",
      ]
    )
  ).toStrictEqual(["zzxzxzxzx"]);
});