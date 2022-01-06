const prompt = require ("prompt-sync")();

const name = (prompt ("Please enter your name: "));
const age = parseInt (prompt(`${name}, please enter your age: `));

const num1 = parseInt (prompt("Please enter one number: "));
const num2 = parseInt (prompt("Please enter another number: "));

const sum = num1 + num2;

console.log(`Hey ${name}, the sum of ${num1} and ${num2} is ${sum}. You are ${age} years old.`);