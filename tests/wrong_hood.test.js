import { expect } from "@jest/globals";
import { wrongHood } from "../exercises/wrong_hood";

test("Find number that mismatch", () => {
  expect(wrongHood([160, 3, 1719, 19, 11, 13, -21])).toStrictEqual(160);
});

test("Find number that mismatch", () => {
  expect(
    wrongHood([800, 8483, 54841719, 848484819, 1484841, 1887873, -2581])
  ).toStrictEqual(800);
});
