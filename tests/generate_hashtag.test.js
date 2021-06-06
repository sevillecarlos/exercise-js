import { expect } from "@jest/globals";
import { generateHashtag } from "../exercises/generate_hashtag";

test("Generate Hashtag Trending", () => {
  expect(
    generateHashtag(
      "lets" +
        " ".repeat(140) +
        "go" +
        " ".repeat(140) +
        "to" +
        " ".repeat(140) +
        "the" +
        " ".repeat(140) +
        "beach"
    )
  ).toBe("#LetsGoToTheBeach");
});

test("Generate Hashtag Trending", () => {
  expect(
    generateHashtag(
      "please" +
        " ".repeat(1400) +
        "bring" +
        " ".repeat(1400) +
        "back" +
        " ".repeat(1400) +
        "2Pac"
    )
  ).toBe("#PleaseBringBack2Pac");
});
