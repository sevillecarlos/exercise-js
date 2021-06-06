//Try to find the finish that is the 3, 
//you walk on the 0's the walls are 1's and the start is 2 

export const mazeRunner = (maze, directions) => {
  let [posStartPoint] = maze.map((x, i) => x.includes(2) && i).filter((x) => x);
  if (posStartPoint !== undefined) {
    let indexStartPoint = maze[posStartPoint].indexOf(2);
    let outBoundry = false;
    const mazeResult = [];

    for (const v of directions) {
      try {
        mazeResult.push(
          v.match("N")
            ? maze[--posStartPoint][indexStartPoint]
            : v.match("S")
            ? maze[++posStartPoint][indexStartPoint]
            : v.match("E")
            ? maze[posStartPoint][++indexStartPoint]
            : v.match("W")
            ? maze[posStartPoint][--indexStartPoint]
            : 0
        );
      } catch (e) {
        outBoundry = e instanceof TypeError;
      }
    }

    return mazeResult.includes(3)
      ? "Finish"
      : mazeResult.includes(1) || mazeResult.includes(undefined) || outBoundry
      ? "Dead"
      : (mazeResult.length === directions.length &&
          mazeResult.every((x) => x === 0)) ||
        mazeResult.includes(2)
      ? "Lost"
      : null;
  } else {
    return "Dead";
  }
};
