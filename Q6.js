const prompt = require("prompt-sync")();

const length = parseInt (prompt("Please enter the length of the rectangle: "));
const width = parseInt (prompt("Please enter the width of the rectangle: "));

const area = length * width
const perimeter = 2 * (length + width)

console.log(`The Area of the rectangle is: ${area}.`);
console.log(`The Perimeter of the rectangle is: ${perimeter}.`);