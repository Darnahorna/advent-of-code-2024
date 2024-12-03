import fs from "fs";

const inputText = fs.readFileSync("./input.txt", "utf8");
const regex = /mul\((\d+),\s*(\d+)\)/g;

let matches = [];
let match;

while ((match = regex.exec(inputText)) !== null) {
  matches.push(match[0]);
}
let sum = 0;

matches.forEach((val) => {
  const numbers = val.match(/\d+/g);
  const num1 = parseInt(numbers[0], 10);
  const num2 = parseInt(numbers[1], 10);
  sum += num1 * num2;
});

console.log(matches);
console.log(sum);
