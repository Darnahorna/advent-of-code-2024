import fs from "fs";

const inputText = fs.readFileSync("./input.txt", "utf8");
const regex = /mul\((\d+),\s*(\d+)\)/g;

let matches = [];
let match;

let lastCommand = null;
let beforeFirstCommand = true;

while ((match = regex.exec(inputText)) !== null) {
  const precedingText = inputText.slice(0, match.index);

  const lastDoIndex = precedingText.lastIndexOf("do()");
  const lastDontIndex = precedingText.lastIndexOf("don't()");

  if (lastDoIndex > lastDontIndex) {
    lastCommand = "do";
    beforeFirstCommand = false;
  } else if (lastDontIndex > lastDoIndex) {
    lastCommand = "don't";
    beforeFirstCommand = false;
  }

  if (beforeFirstCommand || lastCommand === "do") {
    matches.push(match[0]);
  }
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
