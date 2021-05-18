
// //6

// const exmple = "a1c3b4b23n24o";


// //7
// function rot13(message) {
//   const newMessage = message.split("");
//   const newRotMessage = [];
//   newMessage.forEach((x) => {
//     /[a-zA-Z]/.test(x)
//       ? newRotMessage.push(
//           x !== x.toUpperCase()
//             ? String.fromCharCode(
//                 x.charCodeAt(0) + 13 >= 123
//                   ? x.charCodeAt(0) + 13 - 122 + 96
//                   : x.charCodeAt(0) + 13
//               )
//             : String.fromCharCode(
//                 x.charCodeAt(0) + 13 >= 91
//                   ? x.charCodeAt(0) + 13 - 90 + 64
//                   : x.charCodeAt(0) + 13
//               )
//         )
//       : newRotMessage.push(x);
//   });

//   return newRotMessage.join("");
// }

// //console.log(rot13("abcdefghijklmnopqrstuvwxyz"));
// //97 - 122
// //8
// function alphabetPosition(text) {
//   const newText = text;
//   return newText
//     .split("")
//     .filter((x) => /[a-zA-Z]/.test(x))
//     .map((x) => x.toLowerCase().charCodeAt(0) - 96)
//     .join(" ");
// }

// //console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// //9

// function findOutlier(integers) {
//   const newIntegers = integers;
//   return newIntegers.filter((x) => x % 2 === 0).length > 1
//     ? parseInt(newIntegers.filter((x) => x % 2 !== 0).join(""))
//     : parseInt(newIntegers.filter((x) => x % 2 === 0).join(""));
// }

// //console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

// //10

// function arrayDiff(a, b) {
//   return a.filter((x) => !b.includes(x));
// }

// //console.log(arrayDiff([1,2,2,2,3],[2]));

// //11
// function mazeRunner(maze, directions) {
//   let [posStartPoint] = maze.map((x, i) => x.includes(2) && i).filter((x) => x);
//   if (posStartPoint !== undefined) {
//     let indexStartPoint = maze[posStartPoint].indexOf(2);
//     let outBoundry = false;
//     const mazeResult = [];

//     for (const v of directions) {
//       try {
//         mazeResult.push(
//           v.match("N")
//             ? maze[--posStartPoint][indexStartPoint]
//             : v.match("S")
//             ? maze[++posStartPoint][indexStartPoint]
//             : v.match("E")
//             ? maze[posStartPoint][++indexStartPoint]
//             : v.match("W")
//             ? maze[posStartPoint][--indexStartPoint]
//             : 0
//         );
//       } catch (e) {
//         outBoundry = e instanceof TypeError;
//       }
//     }

//     return mazeResult.includes(3)
//       ? "Finish"
//       : mazeResult.includes(1) || mazeResult.includes(undefined) || outBoundry
//       ? "Dead"
//       : (mazeResult.length === directions.length &&
//           mazeResult.every((x) => x === 0)) ||
//         mazeResult.includes(2)
//       ? "Lost"
//       : null;
//   } else {
//     return "Dead";
//   }
// }

// var maze = [
//   [1, 1, 1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 0, 0, 3],
//   [1, 0, 1, 0, 1, 0, 1],
//   [0, 0, 1, 0, 0, 0, 1],
//   [1, 0, 1, 0, 1, 0, 1],
//   [1, 0, 0, 0, 0, 0, 1],
//   [1, 2, 1, 0, 1, 0, 1],
// ];
// // console.log(
// //   mazeRunner(maze, [
// //     "N",
// //     "N",
// //     "N",
// //     "N",
// //     "N",
// //     "E",
// //     "E",
// //     "S",
// //     "S",
// //     "S",
// //     "S",
// //     "S",
// //     "S",
// //   ])
// // );

//12;
// function duplicateCount(text) {
//   return text
//     .toLowerCase()
//     .split("")
//     .sort()
//     .filter((_, i, arr) => arr[i] === arr[i + 1])
//     .filter((_, i, arr) => arr[i] !== arr[i + 1]).length;
// }

// // console.log(duplicateCount("Indivisibility"));

// //13

// var moveZeros = function (arr) {
//   return [...arr.filter((x) => x !== 0), ...arr.filter((x) => x === 0)];
// };

// //  console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

// //14
// function generateHashtag(str) {
//   return str.trim().length === 0 || str.trim().replace(/\s/g, "").length >= 140
//     ? false
//     : "#".concat(
//         str
//           .split(" ")
//           .filter((x) => x)
//           .map((x) => {
//             return `${x[0].toUpperCase() + x.slice(1, x.length)}`;
//           })
//           .join("")
//       );
// }
// /*
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false
// */
// //'⬇️'  '➡️'  '⬅️'  '⬆️'

// // console.log(generateHashtag("code" + " ".repeat(140) + "wars"));

// //15
// function spinWords(string) {
//   return string
//     .split(" ")
//     .map((x) => (x.length >= 5 ? x.split("").reverse().join("") : x))
//     .join(" ");
// }

// //console.log(spinWords("Hey fellow warriors"));

// //16
// function arrange(strng) {
//   return Array.from(
//     new Set(
//       strng
//         .split(" ")
//         .map((x, i) => (i % 2 !== 0 ? x.toUpperCase() : x))
//         .map((x, i) =>
//           i % 2 == 0
//             ? x
//                 .split("")
//                 .map((x) =>
//                   x !== x.toUpperCase()
//                     ? x.charCodeAt(0) - 96
//                     : x.charCodeAt(0) - 64
//                 )
//                 .reduce((a, b) => a + b)
//             : x
//         )
//         .map((x, i, arr) => {
//           if (i % 2 == 0) {
//             const [first, ...other] = String(arr[i]);
//             return `${first}${arr[i + 1]}${other}`;
//           }
//         })
//         .filter((x) => x !== undefined)
//         .join(" ")
//         .replaceAll(/[AEIOU]/gi, "🍕")
//     )
//   )
//     .filter((x) => /\S/.test(x))
//     .join(" ");
// }

// //console.log(arrange("who hit retaining The That a we taken"));
// //17
// const allArrayMethods = (arr, arr2) => {
//   const newArr = arr.concat(arr2);
//   if (
//     Array.from(
//       newArr
//         .copyWithin(
//           0,
//           Math.ceil(newArr.length / 2),
//           Math.ceil(newArr.length / 2) + 1
//         )
//         .entries()
//     )
//       .map((x) => x[1])
//       .every((x) => typeof x !== "boolean")
//   ) {
//     return newArr.findIndex(function findArr() {
//       return newArr
//         .fill(newArr[newArr.length - 1], 0, 1)
//         .filter((x) => !isNaN(parseInt(x)))
//         .find((x, i, arr) => x >= 3);
//     });
//   }
// };

// console.log(
//   allArrayMethods([1, 2, 3, 4, 5, 6], ["a", "b", "c", "d", "e", "f"])
// );
