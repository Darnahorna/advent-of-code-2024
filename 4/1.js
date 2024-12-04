import fs from "fs";

const inputText = fs.readFileSync("./input.txt", "utf8");

const matrix = inputText.split("\n").map((row) => row.split(""));

let xmasCount = 0;

const directions = [
  [-1, 0], // up
  [1, 0], // down
  [0, -1], // left
  [0, 1], // right
  [-1, -1], // top left
  [-1, 1], // top right
  [1, -1], // bottom left
  [1, 1], // bottom right
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[0].length; j++) {
    // Check for the start of an "XMAS" pattern
    if (matrix[i][j] === "X") {
      for (const [dx, dy] of directions) {
        let found = true;
        const letters = ["M", "A", "S"];
        for (let k = 0; k < letters.length; k++) {
          const ni = i + dx * (k + 1);
          const nj = j + dy * (k + 1);

          if (
            ni < 0 || // Out of bounds row
            nj < 0 || // Out of bounds column
            ni >= matrix.length || // Exceeds row limit
            nj >= matrix[0].length || // Exceeds column limit
            matrix[ni][nj] !== letters[k] // Mismatch with expected letter
          ) {
            found = false;
            break;
          }
        }
        if (found) {
          xmasCount++;
        }
      }
    }
  }
}

console.log(xmasCount);
