const prompt = require ("prompt-sync")();

const MONTHS_IN_A_YEAR = 12

const name = prompt("Hi, what's your name? ");
const loanAmount = parseInt (prompt("Please enter your loan amount: $"));
const annualInterestRate = parseInt (prompt("Please enter your annual interest rate: "));
const loanTermInYears = parseInt(prompt("Please enter the number of years to repay the loan: "));

const numberOfPayments = (loanTermInYears * MONTHS_IN_A_YEAR);

const monthlyInterestRate = (annualInterestRate/100)/12;
const monthlyInterestRate1 = 1+monthlyInterestRate;
const monthlyInterestRate2 = (1-Math.pow(monthlyInterestRate1,-numberOfPayments));
const monthlyPayment = monthlyInterestRate * loanAmount;
const monthlyPayment2 = monthlyPayment / monthlyInterestRate2;


console.log(`Hi ${name}, your loan amount is $${loanAmount}.`);
console.log(`Your an Annual Interest Rate is ${annualInterestRate}%, to be paid in ${numberOfPayments} months.`);
console.log(`Your monthly payment figure is: $${monthlyPayment2.toFixed(2)}.`);
console.log("\n");