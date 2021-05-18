import { expect } from "@jest/globals";
import { isPanagram } from "../exercises/is_panagram";

test("Check if a word or sentence is panagram", () => {
  expect(isPanagram("TThe quick brown fox jumps over a lazy cat")).toBe(false);
});

test("Check if a word or sentence is panagram", () => {
  expect(isPanagram("!@#$%^&*zxcvbnmasdfghjklqwertyuiop")).toBe(true);
});
