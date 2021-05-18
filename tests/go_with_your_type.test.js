import { expect } from "@jest/globals";
import { goWithYourType } from "../exercises/go_with_your_type";

test("Separate number and letter from string ", () => {
  expect(goWithYourType("asdghas21g3hj12g3jh12g4jh1")).toStrictEqual([
    [21, 3, 12, 3, 12, 4, 1],
    ["asdghas", "g", "hj", "g", "jh", "g", "jh"],
  ]);
});

test("Separate number and letter from string ", () => {
  expect(goWithYourType("q12er3vtby12hun34jm24u23hb2u3b4u23u32y")).toStrictEqual([
    [3, 12, 34, 24, 23, 2, 3, 4, 23, 32],
    ["q", "er", "vtby", "hun", "jm", "u", "hb", "u", "b", "u", "u", "y"],
  ]);
});
