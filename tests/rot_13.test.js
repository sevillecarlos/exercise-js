import { expect } from "@jest/globals";
import { rot13 } from "../exercises/rot_13";

test("Convert message to rot13 cipher", () => {
  expect(rot13("Thisisasecretshhhh")).toBe("Guvfvfnfrpergfuuuu");
});

test("Convert message to rot13 cipher", () => {
  expect(rot13("GoBringMyWallet")).toBe("TbOevatZlJnyyrg");
});
