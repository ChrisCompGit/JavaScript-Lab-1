const prompt = require ("prompt-sync")();

const POUND_CONVERSION_RATE = 2.20;
const pounds = weight*POUND_CONVERSION_RATE;

const name = prompt ("Please enter your name: ");
const weight = parseInt (prompt ("Please enter your weight (in KGs): "));

console.log(`Hi ${name}, your weight is ${weight}kgs or ${pounds.toFixed(2)}lbs`);
console.log("\n");