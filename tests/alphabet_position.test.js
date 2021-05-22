import { expect } from "@jest/globals";
import { alphabetPosition } from "../exercises/alphabet_position";

test("Give the position of the letter in the alphabet", () => {
  expect(alphabetPosition("The fox begin to talk and say !@#$%")).toBe(
    "20 8 5 6 15 24 2 5 7 9 14 20 15 20 1 12 11 1 14 4 19 1 25"
  );
});

test("Give the position of the letter in the alphabet", () => {
    expect(alphabetPosition("Lets talk spanglish, porque I'm latino.")).toBe(
      "12 5 20 19 20 1 12 11 19 16 1 14 7 12 9 19 8 16 15 18 17 21 5 9 13 12 1 20 9 14 15"
    );
  });