const prompt = require ("prompt-sync")();

const name = prompt ("Hi, what is your name? ");
const price = parseInt (prompt ("Please enter the price of the item: "));
const itemNumber = parseInt (prompt("Please enter the Item Number: "));
const itemTitle = prompt ("Please enter the Item Name: ");
const discountFigure = parseInt (prompt ("Please enter the % discount to be applied: "));

const discountPercent = (discountFigure/100);
const discountAmount = discountPercent*price;
const reducedPrice = price-discountAmount;

console.log(`${name}, the price of the item is: $${price}`);
console.log("\n")
console.log(`The discount to be applied to Item No. ${itemNumber} is ${discountFigure}% which is $${discountAmount}`);
console.log("\n")
console.log(`${itemTitle}'s new price is $${reducedPrice}`);
console.log("\n")