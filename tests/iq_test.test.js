import { expect } from "@jest/globals";
import { iqTest } from "../exercises/iq_test";

test("This is not true:false", () => {
  expect(iqTest("2 4 7 8 10")).toBe(3);
});

test("!@#$%^&*zxcvbnmasdfghjklqwertyuiop:true", () => {
  expect(iqTest("1 2 1 1")).toBe(2);
});
