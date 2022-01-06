const prompt = require("prompt-sync")();

const pay = parseInt (prompt ("Please enter your hourly rate: "));
const hours = parseInt (prompt ("Please enter the number of hours worked: "));

const TAX = 0.25;

const grossSalary = pay * hours;
const netSalary = (grossSalary)-(grossSalary*TAX);

console.log(`Your Gross Salary is ${grossSalary}.`);
console.log(`Your Net Salary is: ${netSalary}.`);
