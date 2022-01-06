const prompt = require ("prompt-sync")();

const COMMISSION_RATE = 0.20;
const TAX = 0.25;

const name = prompt ("Please enter your name: ");
const salary = parseInt (prompt (`${name}, please enter your weekly salary: `));
const weeksWorked = parseInt (prompt (`${name}, please enter the number of weeks you've worked: `));
const sales = parseInt (prompt (`${name}, please enter the value of sales made this month: `));

const commission = COMMISSION_RATE * sales;
const totalSalary = salary * weeksWorked;
const grossSalary = commission + totalSalary;
const taxPaid = totalSalary * TAX;

//if commission is taxable
//const netSalary = (grossSalary)-(grossSalary*TAX);

//if commission is not taxable
const netSalary = (totalSalary - taxPaid + commission);

console.log(`Hi ${name}, your Gross Salary is: ${grossSalary}`);
console.log(`Your Net Salary is: ${netSalary}`);
console.log(`Your commission is: ${commission}`);