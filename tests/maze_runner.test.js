import { expect } from "@jest/globals";
import { mazeRunner } from "../exercises/maze_runner";

var maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
];

test("Escape from the maze", () => {
  expect(
    mazeRunner(maze, [
      "N",
      "N",
      "N",
      "N",
      "N",
      "E",
      "E",
      "S",
      "S",
      "S",
      "S",
      "S",
      "S",
    ])
  ).toBe("Dead");
});

test("Escape from the maze", () => {
    expect(
      mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "E"])
    ).toBe("Finish");
  });
  