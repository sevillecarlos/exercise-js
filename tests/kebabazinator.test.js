import { expect } from "@jest/globals";
import { kebabizinator } from "../exercises/kebabazinator";

test("Convert a camelCase name convention to a kebab name convention", () => {
  expect(kebabizinator("thisIsCamelCase28484848468484948186299String")).toBe(
    "this-is-camel-case-string"
  );
});

test("Convert a camelCase name convention to a kebab name convention", () => {
  expect(kebabizinator("the00Fox000Need099To99Eat")).toBe(
    "the-fox-need-to-eat"
  );
});
