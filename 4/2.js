import fs from "fs";

const inputText = fs.readFileSync("./input.txt", "utf8");

const matrix = inputText.split("\n").map((row) => row.split(""));

let patternCount = 0;

// Define all patterns
const patterns = [
  [
    [-1, -1, "M"],
    [-1, 1, "S"], // Row 1: M S
    [0, 0, "A"], // Row 2:  A
    [1, -1, "M"],
    [1, 1, "S"], // Row 3: M S
  ],
  [
    [-1, -1, "S"],
    [-1, 1, "S"], // Row 1: S S
    [0, 0, "A"], // Row 2:  A
    [1, -1, "M"],
    [1, 1, "M"], // Row 3: M M
  ],
  [
    [-1, -1, "S"],
    [-1, 1, "M"], // Row 1: S M
    [0, 0, "A"], // Row 2:  A
    [1, -1, "S"],
    [1, 1, "M"], // Row 3: S M
  ],
  [
    [-1, -1, "M"],
    [-1, 1, "M"], // Row 1: M M
    [0, 0, "A"], // Row 2:  A
    [1, -1, "S"],
    [1, 1, "S"], // Row 3: S S
  ],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    for (const pattern of patterns) {
      let found = true;

      for (const [dx, dy, letter] of pattern) {
        const ni = i + dx; // Row offset
        const nj = j + dy; // Column offset

        if (
          ni < 0 ||
          nj < 0 || // Out of bounds column
          ni >= matrix.length || // Exceeds row limit
          nj >= matrix[0].length || // Exceeds column limit
          matrix[ni][nj] !== letter // Mismatch with expected letter
        ) {
          found = false;
          break;
        }
      }

      if (found) {
        patternCount++;
        break; // Stop checking for this position if a pattern is found
      }
    }
  }
}

console.log(patternCount);
